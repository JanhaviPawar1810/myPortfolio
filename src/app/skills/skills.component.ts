import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  roles = [
    {
      title: 'Data Analyst/Scientist',
      description:
        'A data scientist/analyst with a strong background in data analysis, machine learning, and statistical modeling. Skilled in extracting valuable insights from data, making data-driven decisions, and communicating findings to stakeholders.',
      image: 'assets/JrDA.jpg',
      techSkills: [
        { name: 'Python' },
        { name: 'R' },
        { name: 'SQL' },
        { name: 'No-SQL' },
        { name: 'Statistics' },
        { name: 'Machine Learning' },
        { name: 'Scikit-Learn' },
        { name: 'NumPy' },
        { name: 'Pandas' },
        { name: 'MatplotLib' },
        { name: 'NLP (Natural Language Proessing)' },
        { name: 'Computer Vision' },
        { name: 'Tensorflow' },
        { name: 'Pytorch' },
        { name: 'PySpark' },
        { name: 'Text Processing' },
        { name: 'Power BI' },
        { name: 'Tableau' },
      ],
    },
    {
      title: 'Python Development',
      description:
        'A skilled Python developer with expertise in building robust web applications using Django, and proficient in database management with SQL. Experienced in developing efficient, scalable backend solutions and optimizing data handling processes.',
      image: 'assets/PythonSkills.jpg',
      techSkills: [
        { name: 'Python' },
        { name: 'Django' },
        { name: 'SQL' },
        { name: 'Javascipt' },
        { name: 'HTML5' },
        { name: 'CSS3' },
        { name: 'Bootstrap UI' },
        { name: 'Schema Design' },
      ],
    },
    {
      title: 'Web Development',
      description:
        'A versatile developer skilled in building responsive e-commerce websites using HTML, CSS, C#, and SQL. Proficient in enhancing user experience with intuitive design and optimizing backend functionality for seamless data management.',
      image: 'assets/WebSkills.jpg',
      techSkills: [
        { name: 'HTML5' },
        { name: 'CSS3' },
        { name: 'SQL' },
        { name: 'Javascipt' },
        { name: 'Bootstrap UI' },
        
      ],
    },
    {
      title: 'Extra Curricular',
      description:
        'Actively participated in co-curricular activities, including coding competitions and event management roles. Demonstrated leadership and teamwork while organizing technical and cultural events. ',
      image: 'assets/ExtraCC.jpg',
      techSkills: [
        { name: 'Student Ambassador at Manchester Metropolitan University' },
        { name: 'Shortlisted in the Python coding round of event INNOVATE19' },
        { name: 'Served as Event Co-Head in INNOVATE20, leading a team to plan and execute the event.' },
        
      ],
    }
  ];

  constructor() {}

  isModalVisible = false;
  selectedRole: any;
  ngOnInit(): void {}

  showModal = false;

  openModal(experience: any) {
    this.selectedRole = experience;
    this.showModal = true;
  }

  closeModal() {
    this.selectedRole = null;
    this.showModal = false;
  }
}
