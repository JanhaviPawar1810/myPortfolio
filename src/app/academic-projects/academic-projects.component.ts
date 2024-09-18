import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-academic-projects',
  templateUrl: './academic-projects.component.html',
  styleUrls: ['./academic-projects.component.css'],
})
export class AcademicProjectsComponent implements OnInit {
  pageTitle = 'Academic Projects';

  projectImages: string[] = ['assets/ml.jpg', 'assets/dl.jpg'];
  projects = [
    {
      title: 'Vehicle Price Prediction',
      category: 'Machine Learning',
      date: 'Nov 2021 - Sept 2022',
      description: [
        'The goal of this machine learning model is to predict the price of cars based on various features and attributes. The dataset used for training and evaluation contains information about car specifications, conditions, and other relevant details. ' +
          'Data Analysis and Visualization: ' +
          'Utilized data visualization techniques such as box plots and pair plots to explore relationships between variables. ' +
          'Identified outliers in the price distribution based on body type, suggesting potential variations. ' +
          'Data Cleaning and Preprocessing: ' +
          'Handled missing values in columns such as mileage, reg_code, standard_colour, year_of_registration, body_type, and fuel_type. ' +
          'Addressed missing values using appropriate techniques, ensuring data readiness for model building. ' +
          'Model Building: ' +
          'Employed machine learning algorithms to predict car prices based on input features. ' +
          'Evaluated model performance using metrics like Mean Squared Error (MSE) and Root Mean Squared Error (RMSE). ' +
          "Achieved a RMSE of approximately 42,543, indicating the model's ability to predict prices with reasonable accuracy. " +
          'Conclusion: ' +
          'The developed machine learning model demonstrates effectiveness in predicting car prices based on diverse features. Further improvements and fine-tuning can be explored to enhance predictive accuracy and robustness. ',
      ],
      tech: 'Machine Learning, Python, Scikit Learn, Supervised Learning, Pandas, Numpy, Matplotlib, data analysis, linear regression, grid search, random forest',
    },
    {
      title: 'Weather Image Classification',
      category: 'Deep Learning',
      date: 'Aug 2020 - Aug 2021',
      description: [
        'The objective of this project is to develop a robust image classification system capable of accurately identifying different weather conditions in images. Leveraging the power of machine learning frameworks TensorFlow and PyTorch, the model aims to categorize images into distinct weather classes, such as sunny, cloudy, rainy, or snowy. ',
        +'Dataset: ' +
          'The dataset comprises a diverse collection of weather images, each labeled with the corresponding weather condition. The dataset includes variations in lighting, scenery, and weather patterns to enhance model generalization. ' +
          'Key Steps: ' +
          'Data Preparation: ' +
          'Dataset loading and preprocessing to ensure compatibility with the chosen frameworks. ' +
          'Image augmentation techniques applied to increase dataset size and improve model robustness. ' +
          'Model Architecture: ' +
          'Defined deep neural network architectures using TensorFlows Keras API and PyTorchs neural network modules. ' +
          'Employed convolutional neural networks (CNNs) to capture spatial hierarchies and features. ' +
          'Training and Evaluation: ' +
          'Split the dataset into training and testing sets for model evaluation. ' +
          'Trained models using labeled images, optimizing for accuracy and minimizing loss. ' +
          'Evaluated model performance on the test set to gauge its ability to generalize to unseen data. ' +
          'Fine-Tuning and Optimization: ' +
          'Iteratively fine-tuned model hyperparameters to enhance performance. ' +
          'Applied transfer learning techniques for leveraging pre-trained models to boost accuracy. ' +
          'Conclusion: ' +
          'The project showcases the capability of deep learning frameworks, TensorFlow and PyTorch, in effectively classifying weather images. The trained models can be applied to real-world scenarios, providing valuable insights into current weather conditions based on visual data. The projects success lies in its ability to accurately differentiate between various weather patterns, contributing to advancements in computer vision applications. ',
      ],
      tech: 'Deep Learning, Tensor Flow, PyTorch, Natural Language Processing, Classification, Supervised Learning',
    },
  ];

  selectedCategory: any;

  constructor() {}

  showModal = false; // Indicates whether the modal should be shown

  openModal(experience: any) {
    this.selectedCategory = experience; // Store the selected experience
    this.showModal = true; // Show the modal
  }

  closeModal() {
    this.selectedCategory = null; // Clear the selected experience
    this.showModal = false; // Hide the modal
  }
  ngOnInit(): void {}
}
