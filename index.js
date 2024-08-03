// script.js

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Retrieve form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Basic validation
        if (name === '' || email === '' || message === '') {
            alert('Please fill out all fields.');
            return;
        }

        // Further validation (e.g., email format)
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // If validation passes, process the form (e.g., send an email, save data)
        alert('Form submitted successfully!');
        
        // Reset form fields
        form.reset();
    });

    // Optional: Load projects dynamically from a JSON file
    function loadProjects() {
        fetch('projects.json')
            .then(response => response.json())
            .then(data => {
                const projectsSection = document.getElementById('projects');
                const projectContainer = document.createElement('div');
                projectContainer.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6';

                data.projects.forEach(project => {
                    const projectDiv = document.createElement('div');
                    projectDiv.className = 'bg-white p-6 rounded-lg shadow-lg';
                    
                    const projectTitle = document.createElement('h3');
                    projectTitle.className = 'text-xl font-semibold mb-2';
                    projectTitle.textContent = project.title;
                    
                    const projectDescription = document.createElement('p');
                    projectDescription.textContent = project.description;
                    
                    projectDiv.appendChild(projectTitle);
                    projectDiv.appendChild(projectDescription);
                    projectContainer.appendChild(projectDiv);
                });

                projectsSection.appendChild(projectContainer);
            })
            .catch(error => console.error('Error loading projects:', error));
    }

    loadProjects();
});
