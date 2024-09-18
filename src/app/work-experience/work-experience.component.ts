import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent implements OnInit {
  experienceImages: string[] = [
    'assets/Wipro.jpg',
    'assets/Python.jpg',
    'assets/PythonDEV.jpg',
    'assets/WebDev.jpg',
    // Add more image paths here
  ];
  workExperience = [
    {
      company: 'WIPRO Ltd',
      position: 'Junior Data Analyst',
      date: 'Aug 2021 - Apr 2022',
      description: [
        "As a Junior Data Analyst at Wipro, I gained hands-on experience in data analysis, working on large datasets to derive actionable insights. I collaborated with cross-functional teams to support decision-making, performed data cleaning and transformation, and developed reports and visualizations using tools like Excel and Power BI, contributing to business intelligence and process improvement efforts.",
      ],
      tech: ' SQL, Python, PoweBI, Tableau, Machine Learning, Data Analysis, Microsoft Excel, Statistics, Scikit-Learn, NumPy, Pandas, MatplotLib, NLP (Natural Language Proessing)'
    },
    {
      company: 'Alsis Technologies',
      position: 'Python Developer Trainee',
      date: 'Jan 2021 - Jun 2021',
      description: [
        'Developed a comprehensive job portal system using Python Django for backend development, with HTML, CSS, Bootstrap, and JavaScript for a dynamic and responsive frontend. Implemented core application functionalities with Python and managed databases using SQL. Enhanced performance by integrating C# for specific functionalities and provided personalized recommendations based on user profiles to improve job matching and user engagement. This project showcases a strong integration of various technologies to deliver an efficient and user-friendly web application.',
      ],
      tech: 'Python, django, SQL, JavaScript, HTML, CSS, Bootstrap, C#'
    },
    {
      company: 'Insys',
      position: 'Python Developer Intern',
      date: 'Jan 2020 - Mar 2020',
      description: [
        "As a Python Developer Intern, I worked with Python and OpenCV to develop and enhance applications involving real-time video processing. I contributed to both frontend and backend development, integrating user interfaces with backend logic to ensure seamless functionality and performance. My role involved implementing and optimizing features, handling data processing tasks, and supporting overall application development.",
      ],
      tech: 'Python, OpenCV, HTML, CSS, Bootstrap, SQL, Image processing',
    },
    {
      company: 'Mind IT Services ',
      position: 'Web Development Intern',
      date: 'Jun 2019 - Jun 2019',
      description: [
        'Worked in web development, handling both frontend and backend tasks. Utilized HTML, CSS, and JavaScript for frontend design and C# and SQL for backend development, ensuring a seamless and efficient web application. Enhanced user experience through responsive design and intuitive interfaces.',
      ],
      tech: 'C#, HTML, CSS, JavaScript, Bootstrap, SQL Server',
    },
  ];

  ngOnInit(): void {}
  selectedExperience: any;

  constructor() {}

  showModal = false; // Indicates whether the modal should be shown

  openModal(experience: any) {
    this.selectedExperience = experience; // Store the selected experience
    this.showModal = true; // Show the modal
  }

  closeModal() {
    this.selectedExperience = null; // Clear the selected experience
    this.showModal = false; // Hide the modal
  }
}
