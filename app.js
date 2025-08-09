// ServiceConnect Platform JavaScript - Fixed Version

// Application data from provided JSON
const appData = {
    serviceProviders: [
        {
            "id": 1,
            "companyName": "TechNova Solutions",
            "industry": "Technology",
            "established": 2019,
            "location": "San Francisco, CA",
            "employees": "25-50",
            "description": "Cutting-edge software development and IT consulting services specializing in AI, blockchain, and cloud solutions.",
            "logo": "https://via.placeholder.com/150x100/2563eb/ffffff?text=TechNova",
            "coverImage": "https://via.placeholder.com/800x400/2563eb/ffffff?text=Tech+Innovation",
            "rating": 4.9,
            "totalReviews": 127,
            "totalProjects": 189,
            "responseTime": "< 2 hours",
            "services": [
                {
                    "name": "Web Development",
                    "price": "$5,000 - $25,000",
                    "duration": "4-12 weeks",
                    "description": "Custom web applications using modern frameworks"
                },
                {
                    "name": "Mobile App Development",
                    "price": "$8,000 - $40,000", 
                    "duration": "6-16 weeks",
                    "description": "Native iOS/Android and cross-platform applications"
                },
                {
                    "name": "AI/ML Solutions",
                    "price": "$15,000 - $100,000",
                    "duration": "8-24 weeks", 
                    "description": "Machine learning models and AI integration services"
                }
            ],
            "portfolio": [
                {
                    "title": "E-commerce Platform",
                    "image": "https://via.placeholder.com/400x300/2563eb/ffffff?text=E-commerce",
                    "category": "Web Development",
                    "client": "RetailCorp Inc."
                },
                {
                    "title": "Fitness Tracking App",
                    "image": "https://via.placeholder.com/400x300/10b981/ffffff?text=Fitness+App",
                    "category": "Mobile App",
                    "client": "HealthTech Ltd."
                }
            ],
            "reviews": [
                {
                    "author": "Sarah Johnson",
                    "company": "StartupXYZ",
                    "rating": 5,
                    "comment": "Outstanding work on our e-commerce platform. Delivered on time and exceeded expectations.",
                    "date": "2024-07-15",
                    "projectType": "Web Development"
                }
            ],
            "contactInfo": {
                "email": "contact@technova.com",
                "phone": "+1 (555) 123-4567",
                "website": "https://technova.com"
            }
        },
        {
            "id": 2,
            "companyName": "Creative Design Studio",
            "industry": "Design & Branding",
            "established": 2020,
            "location": "New York, NY",
            "employees": "10-25",
            "description": "Award-winning design agency specializing in brand identity, UI/UX design, and creative marketing solutions.",
            "logo": "https://via.placeholder.com/150x100/f59e0b/000000?text=Creative",
            "coverImage": "https://via.placeholder.com/800x400/f59e0b/000000?text=Creative+Design",
            "rating": 4.8,
            "totalReviews": 95,
            "totalProjects": 145,
            "responseTime": "< 1 hour",
            "services": [
                {
                    "name": "Brand Identity Design",
                    "price": "$2,500 - $15,000",
                    "duration": "2-6 weeks",
                    "description": "Complete brand identity packages including logo, guidelines, and assets"
                },
                {
                    "name": "UI/UX Design",
                    "price": "$3,000 - $20,000",
                    "duration": "3-8 weeks",
                    "description": "User interface and experience design for web and mobile applications"
                },
                {
                    "name": "Marketing Design",
                    "price": "$500 - $5,000",
                    "duration": "1-3 weeks",
                    "description": "Marketing materials, social media content, and advertising design"
                }
            ],
            "portfolio": [
                {
                    "title": "Brand Identity - FinTech Startup",
                    "image": "https://via.placeholder.com/400x300/f59e0b/000000?text=Brand+Identity",
                    "category": "Brand Design",
                    "client": "PayFlow Inc."
                }
            ],
            "reviews": [
                {
                    "author": "Michael Chen",
                    "company": "PayFlow Inc.",
                    "rating": 5,
                    "comment": "Incredible brand identity work. They perfectly captured our vision and created something even better.",
                    "date": "2024-06-20",
                    "projectType": "Brand Identity"
                }
            ],
            "contactInfo": {
                "email": "hello@creativestudio.com",
                "phone": "+1 (555) 987-6543",
                "website": "https://creativestudio.com"
            }
        },
        {
            "id": 3,
            "companyName": "Digital Marketing Pros",
            "industry": "Digital Marketing",
            "established": 2018,
            "location": "Austin, TX",
            "employees": "15-30",
            "description": "Full-service digital marketing agency driving growth through SEO, PPC, social media, and content marketing strategies.",
            "logo": "https://via.placeholder.com/150x100/10b981/ffffff?text=DigitalPro",
            "coverImage": "https://via.placeholder.com/800x400/10b981/ffffff?text=Digital+Marketing",
            "rating": 4.7,
            "totalReviews": 156,
            "totalProjects": 234,
            "responseTime": "< 4 hours",
            "services": [
                {
                    "name": "SEO Optimization",
                    "price": "$1,500 - $8,000/month",
                    "duration": "3-12 months",
                    "description": "Search engine optimization to improve organic rankings and traffic"
                },
                {
                    "name": "PPC Advertising",
                    "price": "$2,000 - $15,000/month",
                    "duration": "Ongoing",
                    "description": "Google Ads, Facebook Ads, and multi-platform advertising campaigns"
                },
                {
                    "name": "Social Media Marketing",
                    "price": "$1,000 - $5,000/month",
                    "duration": "Ongoing",
                    "description": "Social media strategy, content creation, and community management"
                }
            ],
            "portfolio": [
                {
                    "title": "E-commerce SEO Campaign",
                    "image": "https://via.placeholder.com/400x300/10b981/ffffff?text=SEO+Campaign",
                    "category": "SEO",
                    "client": "ShopSmart Online"
                }
            ],
            "reviews": [
                {
                    "author": "Emily Rodriguez",
                    "company": "ShopSmart Online",
                    "rating": 5,
                    "comment": "Increased our organic traffic by 300% in just 6 months. Highly recommended!",
                    "date": "2024-05-10",
                    "projectType": "SEO"
                }
            ],
            "contactInfo": {
                "email": "info@digitalmarketingpros.com",
                "phone": "+1 (555) 456-7890",
                "website": "https://digitalmarketingpros.com"
            }
        }
    ],
    serviceRequests: [
        {
            "id": 1,
            "customerName": "David Thompson",
            "companyName": "Thompson & Associates",
            "industry": "Law Firm",
            "email": "david@thompsonlaw.com",
            "phone": "+1 (555) 234-5678",
            "serviceType": "Web Development",
            "budget": "$10,000 - $25,000",
            "timeline": "8-12 weeks",
            "requirements": "Need a professional law firm website with client portal, case management integration, and secure document sharing capabilities.",
            "additionalDetails": "Must be mobile-responsive and ADA compliant. Prefer WordPress or custom solution.",
            "status": "New",
            "submittedDate": "2024-08-05",
            "priority": "High",
            "attachments": ["requirements_document.pdf", "current_site_analytics.xlsx"]
        },
        {
            "id": 2,
            "customerName": "Maria Gonzalez",
            "companyName": "Green Valley Restaurant",
            "industry": "Restaurant",
            "email": "maria@greenvalley.com",
            "phone": "+1 (555) 345-6789",
            "serviceType": "Brand Identity Design",
            "budget": "$3,000 - $8,000",
            "timeline": "4-6 weeks",
            "requirements": "Complete rebranding for upscale restaurant including logo, menu design, signage, and marketing materials.",
            "additionalDetails": "Looking for modern, elegant design that reflects our farm-to-table concept.",
            "status": "In Progress",
            "submittedDate": "2024-07-28",
            "priority": "Medium",
            "assignedProvider": 2
        }
    ],
    adminAnalytics: {
        "totalUsers": 2847,
        "totalServiceProviders": 189,
        "totalServiceRequests": 1456,
        "completedProjects": 1234,
        "totalRevenue": 2847592,
        "averageRating": 4.7,
        "monthlyGrowth": 18.5,
        "topCategories": [
            {"name": "Web Development", "count": 245, "revenue": 1250000},
            {"name": "Digital Marketing", "count": 189, "revenue": 890000},
            {"name": "Design & Branding", "count": 156, "revenue": 567000},
            {"name": "Mobile Development", "count": 134, "revenue": 678000},
            {"name": "Consulting", "count": 98, "revenue": 456000}
        ],
        "monthlyStats": [
            {"month": "Jan", "requests": 89, "completed": 76, "revenue": 189000},
            {"month": "Feb", "requests": 112, "completed": 98, "revenue": 245000},
            {"month": "Mar", "requests": 134, "completed": 125, "revenue": 298000},
            {"month": "Apr", "requests": 156, "completed": 143, "revenue": 345000},
            {"month": "May", "requests": 178, "completed": 167, "revenue": 398000},
            {"month": "Jun", "requests": 203, "completed": 189, "revenue": 445000},
            {"month": "Jul", "requests": 234, "completed": 218, "revenue": 512000},
            {"month": "Aug", "requests": 189, "completed": 156, "revenue": 378000}
        ]
    },
    notifications: [
        {
            "id": 1,
            "type": "new_request",
            "title": "New Service Request",
            "message": "David Thompson submitted a new web development request",
            "timestamp": "2024-08-05T14:30:00Z",
            "read": false,
            "priority": "high"
        },
        {
            "id": 2,
            "type": "project_completed",
            "title": "Project Completed",
            "message": "TechNova Solutions completed project for StartupXYZ",
            "timestamp": "2024-08-04T16:45:00Z",
            "read": false,
            "priority": "medium"
        },
        {
            "id": 3,
            "type": "review_submitted",
            "title": "New Review",
            "message": "Sarah Johnson left a 5-star review for TechNova Solutions",
            "timestamp": "2024-08-04T11:20:00Z",
            "read": true,
            "priority": "low"
        }
    ]
};

// Application state
let currentRequestStep = 1;
let maxRequestSteps = 3;
let filteredProviders = [...appData.serviceProviders];
let selectedProvider = null;
let isAdminView = false;

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing app...');
    initializeApp();
    setupEventListeners();
    setupSmoothScrolling();
});

// Initialize the application
function initializeApp() {
    console.log('Initializing application...');
    renderServiceCategories();
    renderProviders();
    renderNotifications();
    updateRequestWizard();
}

// Setup event listeners
function setupEventListeners() {
    console.log('Setting up event listeners...');
    
    // Navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavigation);
    });
    
    // Brand logo click
    const navbarBrand = document.querySelector('.navbar-brand');
    if (navbarBrand) {
        navbarBrand.addEventListener('click', function(e) {
            e.preventDefault();
            scrollToSection('home');
        });
    }
    
    // Search functionality
    const heroSearch = document.getElementById('heroSearch');
    if (heroSearch) {
        heroSearch.addEventListener('input', handleSearch);
        
        // Search button
        const searchBtn = heroSearch.parentElement.querySelector('.btn');
        if (searchBtn) {
            searchBtn.addEventListener('click', function(e) {
                e.preventDefault();
                performSearch();
            });
        }
    }
    
    // Category filters
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', handleCategoryFilter);
    });
    
    // Provider filters
    const industryFilter = document.getElementById('industryFilter');
    const ratingFilter = document.getElementById('ratingFilter');
    
    if (industryFilter) {
        industryFilter.addEventListener('change', handleProviderFilter);
    }
    
    if (ratingFilter) {
        ratingFilter.addEventListener('change', handleProviderFilter);
    }
    
    // Notification button
    const notificationBtn = document.getElementById('notificationBtn');
    if (notificationBtn) {
        notificationBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            toggleNotifications();
        });
    }
    
    // Request wizard navigation
    const prevRequestBtn = document.getElementById('prevRequestBtn');
    const nextRequestBtn = document.getElementById('nextRequestBtn');
    const submitRequestBtn = document.getElementById('submitRequestBtn');
    
    if (prevRequestBtn) {
        prevRequestBtn.addEventListener('click', previousRequestStep);
    }
    
    if (nextRequestBtn) {
        nextRequestBtn.addEventListener('click', nextRequestStep);
    }
    
    // Service request form submission
    const serviceRequestForm = document.getElementById('serviceRequestForm');
    if (serviceRequestForm) {
        serviceRequestForm.addEventListener('submit', handleRequestSubmission);
    }
    
    // Modal close buttons
    setupModalEventListeners();
    
    // Close notifications when clicking outside
    document.addEventListener('click', function(e) {
        const notificationsPanel = document.getElementById('notificationsPanel');
        const notificationBtn = document.getElementById('notificationBtn');
        
        if (notificationsPanel && notificationBtn &&
            !notificationsPanel.contains(e.target) && 
            !notificationBtn.contains(e.target)) {
            notificationsPanel.classList.remove('show');
        }
    });
}

// Setup modal event listeners
function setupModalEventListeners() {
    const closeProviderModal = document.getElementById('closeProviderModal');
    const closeProviderModalBtn = document.getElementById('closeProviderModalBtn');
    const closeSuccessModal = document.getElementById('closeSuccessModal');
    const requestQuoteBtn = document.getElementById('requestQuoteBtn');
    
    if (closeProviderModal) {
        closeProviderModal.addEventListener('click', () => hideModal('providerModal'));
    }
    
    if (closeProviderModalBtn) {
        closeProviderModalBtn.addEventListener('click', () => hideModal('providerModal'));
    }
    
    if (closeSuccessModal) {
        closeSuccessModal.addEventListener('click', () => hideModal('successModal'));
    }
    
    if (requestQuoteBtn) {
        requestQuoteBtn.addEventListener('click', handleRequestQuote);
    }
    
    // Close modals on overlay click
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            if (e.target.id === 'providerModal') hideModal('providerModal');
            if (e.target.id === 'successModal') hideModal('successModal');
        }
    });
}

// Handle navigation
function handleNavigation(e) {
    e.preventDefault();
    const href = e.target.getAttribute('href');
    
    console.log('Navigation clicked:', href);
    
    if (href === '#admin') {
        toggleAdminDashboard();
    } else if (href.startsWith('#')) {
        const sectionId = href.substring(1);
        scrollToSection(sectionId);
    }
}

// Scroll to section
function scrollToSection(sectionId) {
    console.log('Scrolling to section:', sectionId);
    
    if (sectionId === 'admin') {
        toggleAdminDashboard();
        return;
    }
    
    // Make sure we're not in admin view
    if (isAdminView) {
        hideAdminDashboard();
    }
    
    const target = document.getElementById(sectionId);
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Setup smooth scrolling
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#admin' && href.length > 1) {
                e.preventDefault();
                const targetId = href.substring(1);
                scrollToSection(targetId);
            }
        });
    });
}

// Toggle admin dashboard
function toggleAdminDashboard() {
    console.log('Toggling admin dashboard, current state:', isAdminView);
    isAdminView = !isAdminView;
    
    if (isAdminView) {
        showAdminDashboard();
    } else {
        hideAdminDashboard();
    }
}

// Show admin dashboard
function showAdminDashboard() {
    console.log('Showing admin dashboard');
    
    // Hide other sections
    const sections = ['home', 'services', 'providers', 'request'];
    sections.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
            section.style.display = 'none';
        }
    });
    
    // Show admin dashboard
    const adminDashboard = document.getElementById('admin');
    if (adminDashboard) {
        adminDashboard.classList.remove('hidden');
        adminDashboard.style.display = 'block';
    }
    
    // Update admin link text
    const adminLink = document.getElementById('adminLink');
    if (adminLink) {
        adminLink.textContent = 'Back to Site';
    }
    
    // Initialize admin dashboard data
    setTimeout(() => {
        initializeAdminDashboard();
    }, 100);
}

// Hide admin dashboard
function hideAdminDashboard() {
    console.log('Hiding admin dashboard');
    
    // Show other sections
    const sections = ['home', 'services', 'providers', 'request'];
    sections.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
            section.style.display = 'block';
        }
    });
    
    // Hide admin dashboard
    const adminDashboard = document.getElementById('admin');
    if (adminDashboard) {
        adminDashboard.classList.add('hidden');
        adminDashboard.style.display = 'none';
    }
    
    // Update admin link text
    const adminLink = document.getElementById('adminLink');
    if (adminLink) {
        adminLink.textContent = 'Admin';
    }
}

// Initialize admin dashboard
function initializeAdminDashboard() {
    console.log('Initializing admin dashboard...');
    updateMetrics();
    renderCharts();
    renderAdminTables();
}

// Update admin metrics
function updateMetrics() {
    const { adminAnalytics } = appData;
    
    const totalUsers = document.getElementById('totalUsers');
    const totalProviders = document.getElementById('totalProviders');
    const totalRequests = document.getElementById('totalRequests');
    const totalRevenue = document.getElementById('totalRevenue');
    
    if (totalUsers) {
        totalUsers.textContent = adminAnalytics.totalUsers.toLocaleString();
    }
    if (totalProviders) {
        totalProviders.textContent = adminAnalytics.totalServiceProviders.toLocaleString();
    }
    if (totalRequests) {
        totalRequests.textContent = adminAnalytics.totalServiceRequests.toLocaleString();
    }
    if (totalRevenue) {
        totalRevenue.textContent = `$${(adminAnalytics.totalRevenue / 1000000).toFixed(1)}M`;
    }
}

// Render charts
function renderCharts() {
    renderMonthlyChart();
    renderCategoriesChart();
}

// Render monthly performance chart
function renderMonthlyChart() {
    const monthlyChart = document.getElementById('monthlyChart');
    if (!monthlyChart) return;
    
    const ctx = monthlyChart.getContext('2d');
    const { monthlyStats } = appData.adminAnalytics;
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: monthlyStats.map(stat => stat.month),
            datasets: [
                {
                    label: 'Requests',
                    data: monthlyStats.map(stat => stat.requests),
                    borderColor: '#1FB8CD',
                    backgroundColor: 'rgba(31, 184, 205, 0.1)',
                    tension: 0.4,
                    fill: true
                },
                {
                    label: 'Completed',
                    data: monthlyStats.map(stat => stat.completed),
                    borderColor: '#FFC185',
                    backgroundColor: 'rgba(255, 193, 133, 0.1)',
                    tension: 0.4,
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                }
            }
        }
    });
}

// Render categories chart
function renderCategoriesChart() {
    const categoriesChart = document.getElementById('categoriesChart');
    if (!categoriesChart) return;
    
    const ctx = categoriesChart.getContext('2d');
    const { topCategories } = appData.adminAnalytics;
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: topCategories.map(cat => cat.name),
            datasets: [{
                data: topCategories.map(cat => cat.count),
                backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                }
            }
        }
    });
}

// Render admin tables
function renderAdminTables() {
    renderRequestsTable();
    renderProvidersTable();
}

// Render service requests table
function renderRequestsTable() {
    const requestsTable = document.querySelector('#requestsTable tbody');
    if (!requestsTable) return;
    
    requestsTable.innerHTML = '';
    
    appData.serviceRequests.forEach(request => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <strong>${request.customerName}</strong><br>
                <small>${request.companyName}</small>
            </td>
            <td>${request.serviceType}</td>
            <td>${request.budget}</td>
            <td><span class="status status--${request.status.toLowerCase().replace(' ', '-')}">${request.status}</span></td>
            <td>${formatDate(request.submittedDate)}</td>
            <td>
                <button class="btn btn--secondary btn--sm" onclick="viewRequestDetails(${request.id})">
                    View
                </button>
            </td>
        `;
        requestsTable.appendChild(row);
    });
}

// Render service providers table
function renderProvidersTable() {
    const providersTable = document.querySelector('#providersTable tbody');
    if (!providersTable) return;
    
    providersTable.innerHTML = '';
    
    appData.serviceProviders.forEach(provider => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <strong>${provider.companyName}</strong><br>
                <small>${provider.location}</small>
            </td>
            <td>${provider.industry}</td>
            <td>
                <span class="stars">★</span> ${provider.rating}
                <small>(${provider.totalReviews})</small>
            </td>
            <td>${provider.totalProjects}</td>
            <td>
                <button class="btn btn--secondary btn--sm" onclick="viewProviderDetails(${provider.id})">
                    View
                </button>
            </td>
        `;
        providersTable.appendChild(row);
    });
}

// Render service categories
function renderServiceCategories() {
    const serviceCategories = document.getElementById('serviceCategories');
    if (!serviceCategories) return;
    
    console.log('Rendering service categories...');
    
    const categories = [
        { name: 'Web Development', icon: '🌐', color: '#1FB8CD', count: 245 },
        { name: 'Mobile Apps', icon: '📱', color: '#FFC185', count: 189 },
        { name: 'UI/UX Design', icon: '🎨', color: '#B4413C', count: 156 },
        { name: 'Digital Marketing', icon: '📈', color: '#5D878F', count: 134 },
        { name: 'Brand Identity', icon: '✨', color: '#DB4545', count: 98 },
        { name: 'Content Writing', icon: '✍️', color: '#D2BA4C', count: 87 }
    ];
    
    serviceCategories.innerHTML = '';
    
    categories.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'service-category';
        categoryDiv.innerHTML = `
            <div class="service-category-icon" style="background: ${category.color}">
                <span>${category.icon}</span>
            </div>
            <h3>${category.name}</h3>
            <p>Professional ${category.name.toLowerCase()} services from verified providers</p>
            <div class="service-count">${category.count} providers available</div>
        `;
        
        categoryDiv.addEventListener('click', () => {
            filterByCategory(category.name);
        });
        
        serviceCategories.appendChild(categoryDiv);
    });
}

// Render service providers
function renderProviders() {
    const providerGrid = document.getElementById('providerGrid');
    if (!providerGrid) return;
    
    console.log('Rendering providers...', filteredProviders.length);
    
    providerGrid.innerHTML = '';
    
    if (filteredProviders.length === 0) {
        providerGrid.innerHTML = '<p class="text-center">No service providers found matching your criteria.</p>';
        return;
    }
    
    filteredProviders.forEach(provider => {
        const providerDiv = document.createElement('div');
        providerDiv.className = 'provider-card';
        providerDiv.innerHTML = `
            <div class="provider-header">
                <img src="${provider.logo}" alt="${provider.companyName}" class="provider-logo">
                <div class="provider-info">
                    <h3>${provider.companyName}</h3>
                    <div class="provider-industry">${provider.industry}</div>
                </div>
            </div>
            
            <div class="provider-rating">
                <div class="stars">★★★★★</div>
                <span>${provider.rating}</span>
                <span>(${provider.totalReviews} reviews)</span>
            </div>
            
            <p>${provider.description}</p>
            
            <div class="provider-stats">
                <span>📍 ${provider.location}</span>
                <span>⚡ ${provider.responseTime}</span>
            </div>
            
            <div class="provider-services">
                ${provider.services.slice(0, 3).map(service => 
                    `<span class="service-tag">${service.name}</span>`
                ).join('')}
            </div>
            
            <div class="provider-actions">
                <button class="btn btn--secondary btn--sm" onclick="viewProviderDetails(${provider.id})">
                    View Details
                </button>
                <button class="btn btn--primary btn--sm" onclick="requestQuote(${provider.id})">
                    Request Quote
                </button>
            </div>
        `;
        
        providerGrid.appendChild(providerDiv);
    });
}

// Handle search
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    console.log('Search term:', searchTerm);
    
    if (searchTerm.length === 0) {
        filteredProviders = [...appData.serviceProviders];
    } else {
        filteredProviders = appData.serviceProviders.filter(provider => {
            return provider.companyName.toLowerCase().includes(searchTerm) ||
                   provider.industry.toLowerCase().includes(searchTerm) ||
                   provider.description.toLowerCase().includes(searchTerm) ||
                   provider.services.some(service => service.name.toLowerCase().includes(searchTerm));
        });
    }
    
    renderProviders();
}

// Perform search
function performSearch() {
    const heroSearch = document.getElementById('heroSearch');
    if (heroSearch && heroSearch.value.trim()) {
        // Scroll to providers section
        scrollToSection('providers');
        showNotification('info', `Searching for "${heroSearch.value.trim()}"...`);
    }
}

// Handle category filter
function handleCategoryFilter(e) {
    e.preventDefault();
    const category = e.target.dataset.category;
    
    console.log('Category filter clicked:', category);
    
    // Update active button
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    // Filter providers
    filterByCategory(category);
}

// Filter by category
function filterByCategory(category) {
    console.log('Filtering by category:', category);
    
    if (category === 'all') {
        filteredProviders = [...appData.serviceProviders];
    } else {
        filteredProviders = appData.serviceProviders.filter(provider => {
            return provider.industry.toLowerCase().includes(category.toLowerCase()) ||
                   provider.services.some(service => service.name.toLowerCase().includes(category.toLowerCase()));
        });
    }
    
    renderProviders();
    
    // Scroll to providers section
    scrollToSection('providers');
}

// Handle provider filters
function handleProviderFilter() {
    const industryFilter = document.getElementById('industryFilter');
    const ratingFilter = document.getElementById('ratingFilter');
    
    const industryValue = industryFilter ? industryFilter.value : '';
    const ratingValue = ratingFilter ? parseFloat(ratingFilter.value) : null;
    
    console.log('Provider filters:', { industryValue, ratingValue });
    
    filteredProviders = appData.serviceProviders.filter(provider => {
        const industryMatch = !industryValue || provider.industry === industryValue;
        const ratingMatch = !ratingValue || provider.rating >= ratingValue;
        
        return industryMatch && ratingMatch;
    });
    
    renderProviders();
}

// Service Request Wizard Functions
function updateRequestWizard() {
    const requestProgress = document.getElementById('requestProgress');
    if (!requestProgress) return;
    
    console.log('Updating request wizard, step:', currentRequestStep);
    
    // Update progress bar
    const progressPercentage = (currentRequestStep / maxRequestSteps) * 100;
    const progressFill = requestProgress.querySelector('.progress-fill');
    if (progressFill) {
        progressFill.style.width = `${progressPercentage}%`;
    }
    
    // Update step indicators
    const steps = document.querySelectorAll('.progress-steps .step');
    steps.forEach((step, index) => {
        const stepNumber = index + 1;
        step.classList.toggle('active', stepNumber === currentRequestStep);
    });
    
    // Show/hide form steps
    document.querySelectorAll('.form-step').forEach((step, index) => {
        const stepNumber = index + 1;
        step.classList.toggle('active', stepNumber === currentRequestStep);
    });
    
    // Update navigation buttons
    const prevRequestBtn = document.getElementById('prevRequestBtn');
    const nextRequestBtn = document.getElementById('nextRequestBtn');
    const submitRequestBtn = document.getElementById('submitRequestBtn');
    
    if (prevRequestBtn) {
        prevRequestBtn.disabled = currentRequestStep === 1;
    }
    
    if (currentRequestStep === maxRequestSteps) {
        if (nextRequestBtn) nextRequestBtn.classList.add('hidden');
        if (submitRequestBtn) submitRequestBtn.classList.remove('hidden');
    } else {
        if (nextRequestBtn) nextRequestBtn.classList.remove('hidden');
        if (submitRequestBtn) submitRequestBtn.classList.add('hidden');
    }
}

function previousRequestStep() {
    if (currentRequestStep > 1) {
        currentRequestStep--;
        updateRequestWizard();
    }
}

function nextRequestStep() {
    if (validateCurrentRequestStep()) {
        if (currentRequestStep < maxRequestSteps) {
            currentRequestStep++;
            updateRequestWizard();
        }
    }
}

function validateCurrentRequestStep() {
    const currentStep = document.getElementById(`requestStep${currentRequestStep}`);
    if (!currentStep) return false;
    
    const requiredFields = currentStep.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.classList.add('error');
            isValid = false;
        } else {
            field.classList.remove('error');
        }
    });
    
    // Special validation for radio buttons
    if (currentRequestStep === 2) {
        const budgetSelected = currentStep.querySelector('input[name="budget"]:checked');
        if (!budgetSelected) {
            showNotification('warning', 'Please select a budget range');
            isValid = false;
        }
    }
    
    if (!isValid) {
        showNotification('warning', 'Please fill in all required fields');
    }
    
    return isValid;
}

function handleRequestSubmission(e) {
    e.preventDefault();
    console.log('Handling request submission...');
    
    if (!validateCurrentRequestStep()) return;
    
    // Collect form data
    const serviceRequestForm = document.getElementById('serviceRequestForm');
    const formData = new FormData(serviceRequestForm);
    const requestData = Object.fromEntries(formData.entries());
    
    // Generate request ID
    const requestId = `SR-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 1000)).padStart(3, '0')}`;
    
    console.log('Request data:', requestData);
    
    // Add to service requests (simulation)
    const newRequest = {
        id: appData.serviceRequests.length + 1,
        ...requestData,
        status: 'New',
        submittedDate: new Date().toISOString().split('T')[0],
        priority: 'Medium'
    };
    
    appData.serviceRequests.push(newRequest);
    
    // Show success modal
    const requestIdElement = document.getElementById('requestId');
    if (requestIdElement) {
        requestIdElement.textContent = requestId;
    }
    showModal('successModal');
    
    // Reset form
    setTimeout(() => {
        serviceRequestForm.reset();
        currentRequestStep = 1;
        updateRequestWizard();
    }, 2000);
    
    // Add notification
    addNotification({
        id: appData.notifications.length + 1,
        type: 'new_request',
        title: 'Service Request Submitted',
        message: `Your request ${requestId} has been submitted successfully`,
        timestamp: new Date().toISOString(),
        read: false,
        priority: 'medium'
    });
}

// View provider details
function viewProviderDetails(providerId) {
    console.log('Viewing provider details for ID:', providerId);
    const provider = appData.serviceProviders.find(p => p.id === providerId);
    if (!provider) return;
    
    selectedProvider = provider;
    
    const modalContent = document.getElementById('modalProviderContent');
    const modalTitle = document.getElementById('modalProviderName');
    
    if (modalTitle) modalTitle.textContent = provider.companyName;
    
    if (modalContent) {
        modalContent.innerHTML = `
            <div class="provider-modal-content">
                <div class="provider-modal-header">
                    <img src="${provider.logo}" alt="${provider.companyName}" class="provider-logo">
                    <div class="provider-modal-info">
                        <h4>${provider.companyName}</h4>
                        <p>${provider.industry} • ${provider.location}</p>
                        <div class="provider-rating">
                            <div class="stars">★★★★★</div>
                            <span>${provider.rating} (${provider.totalReviews} reviews)</span>
                        </div>
                    </div>
                </div>
                
                <div class="provider-modal-body">
                    <div class="provider-stats-grid">
                        <div class="stat">
                            <strong>${provider.totalProjects}</strong>
                            <span>Projects Completed</span>
                        </div>
                        <div class="stat">
                            <strong>${provider.established}</strong>
                            <span>Established</span>
                        </div>
                        <div class="stat">
                            <strong>${provider.employees}</strong>
                            <span>Employees</span>
                        </div>
                        <div class="stat">
                            <strong>${provider.responseTime}</strong>
                            <span>Response Time</span>
                        </div>
                    </div>
                    
                    <h5>About</h5>
                    <p>${provider.description}</p>
                    
                    <h5>Services & Pricing</h5>
                    <div class="services-list">
                        ${provider.services.map(service => `
                            <div class="service-item">
                                <h6>${service.name}</h6>
                                <p>${service.description}</p>
                                <div class="service-details">
                                    <span class="price">${service.price}</span>
                                    <span class="duration">${service.duration}</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    
                    <h5>Recent Reviews</h5>
                    <div class="reviews-list">
                        ${provider.reviews.map(review => `
                            <div class="review-item">
                                <div class="review-header">
                                    <strong>${review.author}</strong>
                                    <span class="review-company">${review.company}</span>
                                    <div class="review-rating">★ ${review.rating}</div>
                                </div>
                                <p>"${review.comment}"</p>
                                <small>${formatDate(review.date)} • ${review.projectType}</small>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }
    
    showModal('providerModal');
}

// Request quote
function requestQuote(providerId) {
    console.log('Requesting quote for provider ID:', providerId);
    const provider = appData.serviceProviders.find(p => p.id === providerId);
    if (!provider) return;
    
    // Scroll to request section
    scrollToSection('request');
    
    // Show notification
    setTimeout(() => {
        showNotification('info', `Quote request initiated for ${provider.companyName}. Please complete the service request form below.`);
    }, 1000);
}

// Handle request quote from modal
function handleRequestQuote() {
    if (selectedProvider) {
        hideModal('providerModal');
        requestQuote(selectedProvider.id);
    }
}

// Notification functions
function toggleNotifications() {
    const notificationsPanel = document.getElementById('notificationsPanel');
    if (notificationsPanel) {
        notificationsPanel.classList.toggle('show');
        console.log('Toggled notifications panel');
    }
}

function renderNotifications() {
    const notificationsList = document.getElementById('notificationsList');
    const notificationCount = document.getElementById('notificationCount');
    
    if (!notificationsList) return;
    
    console.log('Rendering notifications...');
    
    notificationsList.innerHTML = '';
    
    appData.notifications.forEach(notification => {
        const notificationDiv = document.createElement('div');
        notificationDiv.className = `notification-item ${!notification.read ? 'unread' : ''}`;
        notificationDiv.innerHTML = `
            <div class="notification-title">${notification.title}</div>
            <div class="notification-message">${notification.message}</div>
            <div class="notification-time">${formatRelativeTime(notification.timestamp)}</div>
        `;
        
        notificationDiv.addEventListener('click', () => {
            markNotificationAsRead(notification.id);
        });
        
        notificationsList.appendChild(notificationDiv);
    });
    
    // Update notification count
    const unreadCount = appData.notifications.filter(n => !n.read).length;
    if (notificationCount) {
        notificationCount.textContent = unreadCount;
        notificationCount.style.display = unreadCount > 0 ? 'block' : 'none';
    }
}

function markNotificationAsRead(notificationId) {
    const notification = appData.notifications.find(n => n.id === notificationId);
    if (notification) {
        notification.read = true;
        renderNotifications();
    }
}

function addNotification(notification) {
    appData.notifications.unshift(notification);
    renderNotifications();
}

function showNotification(type, message, duration = 3000) {
    console.log('Showing notification:', type, message);
    
    const notification = document.createElement('div');
    notification.className = `notification-toast notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-base);
        padding: var(--space-16);
        box-shadow: var(--shadow-lg);
        z-index: 9999;
        max-width: 400px;
        animation: slideInRight 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, duration);
}

function getNotificationIcon(type) {
    const icons = {
        success: 'check-circle',
        error: 'exclamation-circle',
        warning: 'exclamation-triangle',
        info: 'info-circle'
    };
    return icons[type] || 'info-circle';
}

// Modal functions
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        console.log('Showing modal:', modalId);
    }
}

function hideModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
        console.log('Hiding modal:', modalId);
    }
}

// Utility functions
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

function formatRelativeTime(timestamp) {
    const now = new Date();
    const date = new Date(timestamp);
    const diffInSeconds = Math.floor((now - date) / 1000);
    
    if (diffInSeconds < 60) return 'Just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
    return `${Math.floor(diffInSeconds / 86400)}d ago`;
}

// Global functions for onclick handlers
window.viewProviderDetails = viewProviderDetails;
window.requestQuote = requestQuote;
window.viewRequestDetails = function(requestId) {
    const request = appData.serviceRequests.find(r => r.id === requestId);
    if (request) {
        showNotification('info', `Viewing request from ${request.customerName} for ${request.serviceType}`);
    }
};

// Add CSS for notifications and animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    .notification-toast {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--space-12);
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: var(--space-8);
    }
    
    .notification-close {
        background: none;
        border: none;
        cursor: pointer;
        color: var(--color-text-secondary);
        padding: var(--space-4);
        border-radius: var(--radius-sm);
    }
    
    .notification-close:hover {
        background: var(--color-secondary);
    }
    
    .form-control.error {
        border-color: var(--color-error);
        box-shadow: 0 0 0 0.2rem rgba(var(--color-error-rgb), 0.25);
    }
    
    .provider-modal-header {
        display: flex;
        align-items: center;
        gap: var(--space-16);
        margin-bottom: var(--space-24);
    }
    
    .provider-stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        gap: var(--space-16);
        margin-bottom: var(--space-24);
    }
    
    .stat {
        text-align: center;
        padding: var(--space-16);
        background: var(--color-secondary);
        border-radius: var(--radius-base);
    }
    
    .stat strong {
        display: block;
        font-size: var(--font-size-xl);
        color: var(--color-primary);
        margin-bottom: var(--space-4);
    }
    
    .service-item {
        border: 1px solid var(--color-border);
        border-radius: var(--radius-base);
        padding: var(--space-16);
        margin-bottom: var(--space-12);
    }
    
    .service-details {
        display: flex;
        justify-content: space-between;
        margin-top: var(--space-8);
        font-size: var(--font-size-sm);
    }
    
    .price {
        color: var(--color-primary);
        font-weight: var(--font-weight-medium);
    }
    
    .review-item {
        border: 1px solid var(--color-border);
        border-radius: var(--radius-base);
        padding: var(--space-16);
        margin-bottom: var(--space-12);
    }
    
    .review-header {
        display: flex;
        align-items: center;
        gap: var(--space-12);
        margin-bottom: var(--space-8);
    }
    
    .review-company {
        color: var(--color-text-secondary);
        font-size: var(--font-size-sm);
    }
    
    .review-rating {
        color: #ffc107;
        margin-left: auto;
    }
`;

document.head.appendChild(style);

console.log('ServiceConnect Platform JavaScript loaded successfully');