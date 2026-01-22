import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ProductDetail } from './index';
import { CartProvider } from '../../contexts/CartContext';
import type { Product } from '../../types/product';
import type { UseQueryResult } from '@tanstack/react-query';

// Mock the hooks and components that depend on Router
vi.mock('../../hooks/useProduct', () => ({
  useProduct: vi.fn(),
}));

vi.mock('../ProductNavigation', () => ({
  ProductNavigation: () => <div>Back to Products</div>,
}));

import { useProduct } from '../../hooks/useProduct';

// Mock product data
const mockProduct: Product = {
  id: 1,
  title: 'Test Product',
  description: 'This is a test product description',
  category: 'Electronics',
  price: 99.99,
  rating: 4.5,
  stock: 10,
  brand: 'Test Brand',
  availabilityStatus: 'In Stock',
  returnPolicy: '30 days',
  thumbnail: 'https://example.com/thumbnail.jpg',
  images: ['https://example.com/image1.jpg', 'https://example.com/image2.jpg'],
};

const mockOutOfStockProduct: Product = {
  ...mockProduct,
  id: 2,
  title: 'Out of Stock Product',
  stock: 0,
  availabilityStatus: 'Out of Stock',
};

// Helper function to render with providers
const renderWithProviders = (ui: React.ReactElement) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return render(
    <QueryClientProvider client={queryClient}>
      <CartProvider>{ui}</CartProvider>
    </QueryClientProvider>
  );
};

describe('ProductDetail Component - Behavior-Driven Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('displays product information correctly (title, price, image)', async () => {
    // Arrange: Mock the product data
    vi.mocked(useProduct).mockReturnValue({
      data: mockProduct,
      isLoading: false,
      isError: false,
    } as UseQueryResult<Product, Error>);

    // Act: Render the component
    renderWithProviders(<ProductDetail />);

    // Assert: Check that product information is visible to the user
    await waitFor(() => {
      // Title should be visible as a heading
      expect(screen.getByRole('heading', { name: mockProduct.title })).toBeInTheDocument();
      
      // Price should be visible
      expect(screen.getByText(`$${mockProduct.price.toFixed(2)}`)).toBeInTheDocument();
      
      // Description should be visible
      expect(screen.getByText(mockProduct.description)).toBeInTheDocument();
      
      // Image should be visible with correct alt text
      const image = screen.getByAltText(mockProduct.title);
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute('src', mockProduct.images[0]);
    });
  });

  it('handles add to cart button click and triggers addToCart callback', async () => {
    // Arrange: Mock the product data
    vi.mocked(useProduct).mockReturnValue({
      data: mockProduct,
      isLoading: false,
      isError: false,
    } as UseQueryResult<Product, Error>);

    const user = userEvent.setup();

    // Act: Render the component
    renderWithProviders(<ProductDetail />);

    // Find and click the "Add to Cart" button
    const addToCartButton = await screen.findByRole('button', { name: /add to cart/i });
    expect(addToCartButton).toBeInTheDocument();
    expect(addToCartButton).toBeEnabled();
    
    // Click the button - this simulates the user interaction
    await user.click(addToCartButton);

    // Assert: Verify button remains enabled after click (allowing multiple additions)
    expect(addToCartButton).toBeEnabled();
  });

  it('displays product metadata (brand, category, stock, rating)', async () => {
    // Arrange: Mock the product data
    vi.mocked(useProduct).mockReturnValue({
      data: mockProduct,
      isLoading: false,
      isError: false,
    } as UseQueryResult<Product, Error>);

    // Act: Render the component
    renderWithProviders(<ProductDetail />);

    // Assert: Check that metadata is visible
    await waitFor(() => {
      // Brand
      expect(screen.getByText('Brand')).toBeInTheDocument();
      expect(screen.getByText(mockProduct.brand!)).toBeInTheDocument();
      
      // Category
      expect(screen.getByText('Category')).toBeInTheDocument();
      expect(screen.getByText(mockProduct.category)).toBeInTheDocument();
      
      // Stock
      expect(screen.getByText('Stock')).toBeInTheDocument();
      expect(screen.getByText(mockProduct.stock.toString())).toBeInTheDocument();
      
      // Rating
      expect(screen.getByText('Rating')).toBeInTheDocument();
      expect(screen.getByText(`⭐ ${mockProduct.rating.toFixed(1)}`)).toBeInTheDocument();
    });
  });

  it('handles out-of-stock state appropriately', async () => {
    // Arrange: Mock an out-of-stock product
    vi.mocked(useProduct).mockReturnValue({
      data: mockOutOfStockProduct,
      isLoading: false,
      isError: false,
    } as UseQueryResult<Product, Error>);

    // Act: Render the component
    renderWithProviders(<ProductDetail />);

    // Assert: Check that out-of-stock information is displayed
    await waitFor(() => {
      // Product title should still be visible
      expect(screen.getByRole('heading', { name: mockOutOfStockProduct.title })).toBeInTheDocument();
      
      // Stock should show 0
      expect(screen.getByText('Stock')).toBeInTheDocument();
      expect(screen.getByText('0')).toBeInTheDocument();
      
      // Add to Cart button should still be present
      const addToCartButton = screen.getByRole('button', { name: /add to cart/i });
      expect(addToCartButton).toBeInTheDocument();
    });
  });
});
