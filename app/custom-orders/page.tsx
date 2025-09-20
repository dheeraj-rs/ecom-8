'use client';
import { useState } from 'react';
import { Upload, X, Plus, Check, ArrowRight, FileImage, Calendar, DollarSign, MessageSquare } from 'lucide-react';

export default function CustomOrders() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    description: '',
    budget: '',
    timeline: '',
    materials: '',
    dimensions: '',
    inspiration: ''
  });
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);
  const [currentStep, setCurrentStep] = useState(1);

  const projectTypes = [
    { id: 'furniture', label: 'Custom Furniture', description: 'Tables, chairs, beds, storage' },
    { id: 'cabinets', label: 'Kitchen Cabinets', description: 'Full kitchen or individual pieces' },
    { id: 'artistic', label: 'Artistic Pieces', description: 'Sculptures, decorative items' },
    { id: 'restoration', label: 'Restoration', description: 'Repair and refinish existing pieces' },
    { id: 'commercial', label: 'Commercial', description: 'Restaurant, office, retail spaces' },
    { id: 'other', label: 'Other', description: 'Custom project not listed above' }
  ];

  const budgetRanges = [
    { id: 'under-1000', label: 'Under $1,000', description: 'Small projects, repairs' },
    { id: '1000-5000', label: '$1,000 - $5,000', description: 'Medium furniture pieces' },
    { id: '5000-15000', label: '$5,000 - $15,000', description: 'Large furniture, partial kitchen' },
    { id: '15000-30000', label: '$15,000 - $30,000', description: 'Full kitchen, multiple pieces' },
    { id: 'over-30000', label: 'Over $30,000', description: 'Extensive projects, commercial' },
    { id: 'discuss', label: 'Let\'s Discuss', description: 'Not sure about budget' }
  ];

  const timelineOptions = [
    { id: 'flexible', label: 'Flexible', description: 'No rush, when it\'s ready' },
    { id: '1-2-months', label: '1-2 Months', description: 'Standard timeline' },
    { id: '3-6-months', label: '3-6 Months', description: 'Complex projects' },
    { id: '6-months-plus', label: '6+ Months', description: 'Large scale projects' },
    { id: 'rush', label: 'Rush Order', description: 'Expedited completion' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setUploadedImages([...uploadedImages, ...newFiles]);
    }
  };

  const removeImage = (index: number) => {
    setUploadedImages(uploadedImages.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData, uploadedImages);
    alert('Thank you! Your custom order request has been submitted. We\'ll contact you within 24 hours.');
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

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
              Custom
              <span className="block text-orange-400">Orders</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Transform your vision into reality with bespoke woodwork crafted from sustainable Amazon forest materials. 
              Every piece is unique, just like your story.
            </p>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple steps to bring your vision to life</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Share Your Vision', description: 'Tell us about your project and upload inspiration images' },
              { step: 2, title: 'Free Consultation', description: 'We discuss your needs, timeline, and provide initial quote' },
              { step: 3, title: 'Design & Approval', description: 'Detailed design creation with your feedback and approval' },
              { step: 4, title: 'Craftsmanship', description: 'Expert creation with progress updates and final delivery' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 ${
                  currentStep >= item.step ? 'bg-green-600' : 'bg-gray-300'
                }`}>
                  {currentStep > item.step ? <Check className="h-8 w-8" /> : item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Form Header */}
            <div className="bg-gradient-to-r from-green-800 to-green-900 px-8 py-6 text-white">
              <h2 className="text-2xl font-bold mb-2">Custom Order Request</h2>
              <p className="text-green-100">Step {currentStep} of 4</p>
              <div className="mt-4 bg-white/20 rounded-full h-2">
                <div 
                  className="bg-orange-400 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep / 4) * 100}%` }}
                />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-8">
              {/* Step 1: Project Type & Basic Info */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Tell Us About Your Project</h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">Project Type *</label>
                    <div className="grid md:grid-cols-2 gap-4">
                      {projectTypes.map((type) => (
                        <label key={type.id} className="relative">
                          <input
                            type="radio"
                            name="projectType"
                            value={type.id}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          <div className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                            formData.projectType === type.id
                              ? 'border-green-500 bg-green-50'
                              : 'border-gray-200 hover:border-green-300'
                          }`}>
                            <h4 className="font-semibold text-gray-900">{type.label}</h4>
                            <p className="text-sm text-gray-600">{type.description}</p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Project Details */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Details</h3>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Description *</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Describe your vision in detail. What do you want to create? What style do you prefer? Any specific requirements?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Dimensions (if known)</label>
                    <input
                      type="text"
                      name="dimensions"
                      value={formData.dimensions}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="e.g., 8ft x 4ft dining table, or let us help you determine the best size"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Materials</label>
                    <input
                      type="text"
                      name="materials"
                      value={formData.materials}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="e.g., Amazon Mahogany, Oak, Cedar, or 'I need guidance on materials'"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Inspiration & Style Notes</label>
                    <textarea
                      name="inspiration"
                      value={formData.inspiration}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Any specific styles, colors, or design elements you love? References to existing pieces?"
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Budget & Timeline */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Budget & Timeline</h3>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">Budget Range *</label>
                    <div className="space-y-3">
                      {budgetRanges.map((budget) => (
                        <label key={budget.id} className="relative">
                          <input
                            type="radio"
                            name="budget"
                            value={budget.id}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          <div className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 flex justify-between items-center ${
                            formData.budget === budget.id
                              ? 'border-green-500 bg-green-50'
                              : 'border-gray-200 hover:border-green-300'
                          }`}>
                            <div>
                              <h4 className="font-semibold text-gray-900">{budget.label}</h4>
                              <p className="text-sm text-gray-600">{budget.description}</p>
                            </div>
                            <DollarSign className="h-5 w-5 text-gray-400" />
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">Preferred Timeline *</label>
                    <div className="space-y-3">
                      {timelineOptions.map((timeline) => (
                        <label key={timeline.id} className="relative">
                          <input
                            type="radio"
                            name="timeline"
                            value={timeline.id}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          <div className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 flex justify-between items-center ${
                            formData.timeline === timeline.id
                              ? 'border-green-500 bg-green-50'
                              : 'border-gray-200 hover:border-green-300'
                          }`}>
                            <div>
                              <h4 className="font-semibold text-gray-900">{timeline.label}</h4>
                              <p className="text-sm text-gray-600">{timeline.description}</p>
                            </div>
                            <Calendar className="h-5 w-5 text-gray-400" />
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Images & Final Details */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Inspiration Images & Final Details</h3>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">Upload Inspiration Images</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-green-400 transition-colors duration-200">
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        id="image-upload"
                      />
                      <label htmlFor="image-upload" className="cursor-pointer">
                        <FileImage className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-lg font-medium text-gray-900 mb-2">Upload Images</p>
                        <p className="text-gray-600">Drag and drop or click to select inspiration photos, sketches, or reference images</p>
                      </label>
                    </div>

                    {uploadedImages.length > 0 && (
                      <div className="mt-4">
                        <h4 className="font-medium text-gray-900 mb-3">Uploaded Images ({uploadedImages.length})</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {uploadedImages.map((file, index) => (
                            <div key={index} className="relative group">
                              <img
                                src={URL.createObjectURL(file)}
                                alt={`Upload ${index + 1}`}
                                className="w-full h-24 object-cover rounded-lg"
                              />
                              <button
                                type="button"
                                onClick={() => removeImage(index)}
                                className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                              >
                                <X className="h-4 w-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="bg-green-50 rounded-lg p-6">
                    <h4 className="font-semibold text-green-800 mb-3">What Happens Next?</h4>
                    <ul className="space-y-2 text-green-700">
                      <li className="flex items-start space-x-2">
                        <Check className="h-5 w-5 mt-0.5 flex-shrink-0" />
                        <span>We'll review your request within 24 hours</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Check className="h-5 w-5 mt-0.5 flex-shrink-0" />
                        <span>Schedule a free consultation call or meeting</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Check className="h-5 w-5 mt-0.5 flex-shrink-0" />
                        <span>Provide detailed quote and timeline</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Check className="h-5 w-5 mt-0.5 flex-shrink-0" />
                        <span>Begin design process upon approval</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t">
                <button
                  type="button"
                  onClick={prevStep}
                  className={`px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200 ${
                    currentStep === 1 ? 'invisible' : ''
                  }`}
                >
                  Previous
                </button>

                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-8 py-3 bg-green-800 text-white font-semibold rounded-lg hover:bg-green-900 transition-colors duration-200 flex items-center"
                  >
                    Next Step
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-8 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors duration-200 flex items-center"
                  >
                    Submit Request
                    <MessageSquare className="h-5 w-5 ml-2" />
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Common questions about our custom order process</p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How long does a custom project typically take?",
                answer: "Most custom furniture projects take 3-6 weeks from design approval to completion. Kitchen cabinets and larger projects may take 6-12 weeks. We'll provide a detailed timeline during consultation."
              },
              {
                question: "Do you provide design services?",
                answer: "Yes! Our design consultation is included in every custom project. We work with you to refine your vision, select materials, and create detailed plans before beginning construction."
              },
              {
                question: "What materials do you work with?",
                answer: "We specialize in sustainable Amazon forest woods including mahogany, cedar, and teak. We also work with domestic hardwoods like oak, walnut, and cherry. All wood is responsibly sourced."
              },
              {
                question: "Can you match existing furniture?",
                answer: "Absolutely! We can match wood species, stains, and finishes to complement your existing pieces. Bring photos or samples for the most accurate matching."
              },
              {
                question: "Do you offer payment plans?",
                answer: "Yes, we offer flexible payment options for larger projects. Typically 50% deposit to begin, 25% at midpoint, and 25% upon completion. We can discuss custom arrangements during consultation."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}