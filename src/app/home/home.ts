import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

type Category = 'Home Decor' | 'Premium Decor' | 'Useful Utilities';
interface Product {
  id: number;
  name: string;
  category: Category;
  price: number;
  image: string;
  tag?: string;
}

@Component({
  imports: [FormsModule],
  selector: 'tt-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
    readonly categories = ['All pieces', 'Home Decor', 'Premium Decor', 'Useful Utilities'] as const;
    readonly products: Product[] = [
      { id: 1, name: 'Wild Tree Sculpture', category: 'Home Decor', price: 1890, image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85', tag: 'Hand-carved' },
      { id: 2, name: 'The Sunlit Wall Clock', category: 'Premium Decor', price: 3490, image: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=900&q=85', tag: 'Bestseller' },
      { id: 3, name: 'Sparrow in Flight', category: 'Home Decor', price: 1290, image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=85' },
      { id: 4, name: 'Everyday Push-up Grips', category: 'Useful Utilities', price: 1590, image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=85', tag: 'Made to move' },
      { id: 5, name: 'Little Love Cats', category: 'Home Decor', price: 990, image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=85' },
      { id: 6, name: 'Gather & Hang Rack', category: 'Useful Utilities', price: 2290, image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=85' },
      { id: 7, name: 'The Keepsake Clock', category: 'Premium Decor', price: 4290, image: 'https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?auto=format&fit=crop&w=900&q=85', tag: 'Limited run' },
      { id: 8, name: 'Little Things Key Shelf', category: 'Useful Utilities', price: 1790, image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85' }
    ];
    readonly activeCategory = signal<string>('All pieces');
    readonly searchTerm = signal('');
    readonly cartCount = signal(0);
    readonly cartOpen = signal(false);
    readonly mobileMenuOpen = signal(false);
    readonly filteredProducts = computed(() => {
      const category = this.activeCategory();
      const term = this.searchTerm().trim().toLowerCase();
      return this.products.filter(product => (category === 'All pieces' || product.category === category) && (!term || product.name.toLowerCase().includes(term)));
    });
    selectCategory(category: string): void {
      this.activeCategory.set(category);
      document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
      this.mobileMenuOpen.set(false);
    }
    addToCart(): void { this.cartCount.update(count => count + 1); }
    formatPrice(price: number): string { return `₹${price.toLocaleString('en-IN')}`; }
  
}
