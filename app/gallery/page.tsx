'use client';
import { useState, useEffect } from 'react';
import { Search, Filter, Grid, List, Heart, Eye, ArrowRight, Star } from 'lucide-react';

export default function Gallery() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const categories = [
    { id: 'all', label: 'All Projects', count: 48 },
    { id: 'furniture', label: 'Furniture', count: 18 },
    { id: 'cabinets', label: 'Kitchen Cabinets', count: 12 },
    { id: 'artistic', label: 'Artistic Pieces', count: 8 },
    { id: 'custom', label: 'Custom Orders', count: 10 }
  ];

  const materials = [
    { id: 'all', label: 'All Materials' },
    { id: 'mahogany', label: 'Amazon Mahogany' },
    { id: 'cedar', label: 'Cedar' },
    { id: 'teak', label: 'Teak' },
    { id: 'oak', label: 'Oak' },
    { id: 'walnut', label: 'Walnut' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Royal Amazon Dining Set',
      category: 'furniture',
      material: 'mahogany',
      year: 2024,
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Handcrafted 8-seater dining table with matching chairs, featuring intricate forest-inspired carvings.',
      price: '$4,500',
      likes: 247,
      views: 1850,
      featured: true,
      tags: ['dining', 'handcarved', 'sustainable']
    },
    {
      id: 2,
      title: 'Forest Kitchen Paradise',
      category: 'cabinets',
      material: 'cedar',
      year: 2024,
      image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Complete kitchen transformation with custom cabinetry, island, and natural wood finishes.',
      price: '$12,800',
      likes: 189,
      views: 1420,
      featured: true,
      tags: ['kitchen', 'cabinets', 'modern']
    },
    {
      id: 3,
      title: 'Living Edge Coffee Table',
      category: 'artistic',
      material: 'teak',
      year: 2023,
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Stunning live-edge coffee table that celebrates the natural form and beauty of the tree.',
      price: '$1,850',
      likes: 312,
      views: 2100,
      featured: false,
      tags: ['artistic', 'live-edge', 'unique']
    },
    {
      id: 4,
      title: 'Heritage Library Bookshelf',
      category: 'furniture',
      material: 'oak',
      year: 2023,
      image: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Traditional floor-to-ceiling bookshelf with adjustable shelves and hidden storage.',
      price: '$2,200',
      likes: 156,
      views: 980,
      featured: false,
      tags: ['bookshelf', 'storage', 'traditional']
    },
    {
      id: 5,
      title: 'Executive Office Suite',
      category: 'custom',
      material: 'walnut',
      year: 2023,
      image: 'https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Custom executive desk with matching credenza and built-in cable management.',
      price: '$3,400',
      likes: 201,
      views: 1340,
      featured: false,
      tags: ['office', 'executive', 'modern']
    },
    {
      id: 6,
      title: 'Spa Bathroom Vanity',
      category: 'cabinets',
      material: 'cedar',
      year: 2024,
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Water-resistant bathroom vanity with natural stone integration and soft-close drawers.',
      price: '$1,650',
      likes: 178,
      views: 1120,
      featured: false,
      tags: ['bathroom', 'vanity', 'spa']
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesMaterial = selectedMaterial === 'all' || project.material === selectedMaterial;
    
    return matchesSearch && matchesCategory && matchesMaterial;
  });

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return b.year - a.year;
      case 'oldest':
        return a.year - b.year;
      case 'popular':
        return b.likes - a.likes;
      case 'price-high':
        return parseFloat(b.price.replace('$', '').replace(',', '')) - parseFloat(a.price.replace('$', '').replace(',', ''));
      case 'price-low':
        return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-900 to-green-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div 
          className="absolute inset-0 parallax-bg opacity-30"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop')`,
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Craftsmanship
              <span className="block text-orange-400">Gallery</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Explore four decades of Amazon forest woodworking mastery. Each piece tells a story 
              of sustainable craftsmanship and natural beauty.
            </p>
          </div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.label} ({category.count})
                  </option>
                ))}
              </select>

              <select
                value={selectedMaterial}
                onChange={(e) => setSelectedMaterial(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              >
                {materials.map(material => (
                  <option key={material.id} value={material.id}>
                    {material.label}
                  </option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="popular">Most Popular</option>
                <option value="price-high">Price: High to Low</option>
                <option value="price-low">Price: Low to High</option>
              </select>

              {/* View Toggle */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-green-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-green-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {sortedProjects.length} Projects Found
            </h2>
            <div className="text-gray-600">
              Showing {sortedProjects.length} of {projects.length} projects
            </div>
          </div>

          {/* Grid View */}
          {viewMode === 'grid' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedProjects.map((project) => (
                <div key={project.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                          <Star className="h-4 w-4 mr-1" />
                          Featured
                        </span>
                      </div>
                    )}
                    
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200">
                        <Heart className="h-5 w-5 text-green-800" />
                      </button>
                      <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200">
                        <Eye className="h-5 w-5 text-green-800" />
                      </button>
                    </div>
                    
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center space-x-4 text-white text-sm">
                        <div className="flex items-center space-x-1">
                          <Heart className="h-4 w-4" />
                          <span>{project.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="h-4 w-4" />
                          <span>{project.views}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium capitalize">
                        {project.category}
                      </span>
                      <span className="text-2xl font-bold text-orange-600">{project.price}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-800 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <button className="w-full bg-green-800 hover:bg-green-900 text-white font-semibold py-3 rounded-lg transition-colors duration-300 flex items-center justify-center">
                      View Details
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* List View */}
          {viewMode === 'list' && (
            <div className="space-y-6">
              {sortedProjects.map((project) => (
                <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover-lift">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 relative overflow-hidden">
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 md:h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      {project.featured && (
                        <div className="absolute top-4 left-4">
                          <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                            <Star className="h-4 w-4 mr-1" />
                            Featured
                          </span>
                        </div>
                      )}
                    </div>
                    
                    <div className="md:w-2/3 p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium capitalize">
                            {project.category}
                          </span>
                          <span className="text-3xl font-bold text-orange-600">{project.price}</span>
                        </div>
                        
                        <h3 className="text-2xl font-semibold text-gray-900 mb-3 hover:text-green-800 transition-colors duration-300">
                          {project.title}
                        </h3>
                        
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag, index) => (
                            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-6 text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Heart className="h-4 w-4" />
                            <span>{project.likes}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="h-4 w-4" />
                            <span>{project.views}</span>
                          </div>
                          <span className="text-sm">Year: {project.year}</span>
                        </div>
                        
                        <button className="px-6 py-3 bg-green-800 hover:bg-green-900 text-white font-semibold rounded-lg transition-colors duration-300 flex items-center">
                          View Details
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* No Results */}
          {sortedProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No projects found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search criteria or filters</p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedMaterial('all');
                }}
                className="px-6 py-3 bg-green-800 text-white font-semibold rounded-lg hover:bg-green-900 transition-colors duration-300"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}