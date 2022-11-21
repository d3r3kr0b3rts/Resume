import { Component } from '@angular/core';

@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.css']
})
export class EmploymentComponent {

  isArray(obj : any ) {
    return Array.isArray(obj)
  }

  history = {
    0: {
      Employer: 'Independent Contractor',
      Date: '2019 - Present',
      Responsibilities: ['Automotive Repair', 'Residential Maintenance', 'PC Repair', 'Web Development']
    },
    1: {
      Employer: 'Crump Communications LLC',
      Location: 'Muskegon, MI',
      Date: '2018-2019',
      Position: 'Service Installer',
      Responsibilities: ['Installation of WiFi networks and NAT security camera systems.', 'Troublshooting networked devices on local networks']
    },
    2: {
      Employer: 'MOKA',
      Location: 'Muskegon, MI',
      Date: '2016 - 2018',
      Position: 'Residential Support Staff',
      Responsibilities: [
        'Provide care and supervision for individuals with disabilities.',
        'Observe and document changes in physical and mental health of residents.',
        'Administer medications and First Aid as needed.',
        'Transport residents to and from community activities.',
        'Assist in meal prep, residential cleaning and light maintenance.',
        'Ensure comprehensive documentation of program activities.'
      ]
    },
    3: {
      Employer: 'Hickman Assembly LLC',
      Location: 'Logan, OH',
      Date: '2012 - 2018',
      Position: 'Assembly Technician, District Manager',
      Responsibilities: [
        'Assemble products such as grills, wheelbarrows and garden equipment.',
        'Invoice clients for work completed.',
        'Create service schedule for clients',
        'Hire and train Assembly Technicians.'
      ]
    },
    4: {
      Employer: 'Mills Landscaping',
      Location: 'Spring Lake, MI',
      Date: '2008 - 2012',
      Position: 'Landscaper'
    },
    5: {
      Employer: 'Red Cab Co',
      Location: 'Chicago, IL',
      Date: '2008',
      Position: 'Taxi Driver'
    },
    6: {
      Employer: 'Get-A-Grip Cycles',
      Location: 'Chicago, IL',
      Date: '2007 - 2008',
      Position: 'Mechanic, Customer Service'
    },
    7: {
      Employer: 'Speedway SuperAmerica',
      Location: 'Buffalo Grove, IL',
      Date: '2007',
      Position: 'Cashier'
    },
    8: {
      Employer: 'Timber-lee Christian Centers',
      Location: 'East Troy, WI',
      Date: '2004 - 2007',
      Position: 'Cabin Counselor, Activities Instructor'
    },
    9: {
      Employer: 'Breakaway Bicycles',
      Location: 'Muskegon, MI',
      Date: '1998 - 2003',
      Position: 'Mechanic, Customer Service'
    },
    10: {
      Employer: 'Orchard Market',
      Location: 'Spring Lake, MI',
      Date: '1996 - 1998',
      Position: 'Customer Service'
    },

  }

  len = Object.keys(this.history).length - 1;


}
