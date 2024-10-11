interface Teacher {
  readonly firstName: string;   
  readonly lastName: string;     // Modifiable only at initialization
  fullTimeEmployee: boolean;     // Must always be defined
  yearsOfExperience?: number;    // Optional attribute
  location: string;              // Must always be defined
  [key: string]: any;            
}

// Example of creating a Teacher object
const teacher: Teacher = {
  firstName: 'Somia',
  lastName: 'Ann',
  fullTimeEmployee: true,
  location: 'Nigeria',
  contract: false,   // Additional property
};

