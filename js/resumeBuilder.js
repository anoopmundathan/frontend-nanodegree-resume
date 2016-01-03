/* Resume Builder Object Java Script file
This file declares 4 objects 
1. bio
2. work
3. project
4. education */

//Define bio Object
var bio = {

    "name": "Anoop Mundathan",

    "role": "Front-End Web Developer", 

    "contacts": {
        "mobile": "000-000-0000",
        "email" : "anoop.mundathan@gmail.com",
        "github": "anoopmundathan",
        "twitter": "@anoopmundathan",
        "location": "London"
    },

    "welcomeMessage": "Welcome to my resume Web Page",

    "skills": [
        "HTML", 
        "CSS", 
        "Java Script",
        "AS400"
    ],

    "bioPic": "images/fry.jpg",

    //Display function helps to display bio details
    display: function() {
        var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
        var formattedHeader = HTMLheaderName.replace("%data%", bio.name);
        var formattedbioPic = HTMLbioPic.replace('%data%',bio.bioPic);
        var formattedmobile = HTMLmobile.replace('%data%',bio.contacts.mobile);
        var formattedemail = HTMLemail.replace('%data%',bio.contacts.email);
        var formattedtwitter = HTMLtwitter.replace('%data%',bio.contacts.twitter);
        var formattedgtihub = HTMLgithub.replace('%data%',bio.contacts.github);
        var formattedlocation = HTMLlocation.replace('%data%',bio.contacts.location);

        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedHeader);
        $("#header").append(formattedbioPic);

        $("#topContacts").append(formattedmobile);
        $("#topContacts").append(formattedemail);
        $("#topContacts").append(formattedtwitter);
        $("#topContacts").append(formattedgtihub);
        $("#topContacts").append(formattedlocation);

        $("#footerContacts").append(formattedmobile);
        $("#footerContacts").append(formattedemail);
        $("#footerContacts").append(formattedtwitter);
        $("#footerContacts").append(formattedgtihub);
        $("#footerContacts").append(formattedlocation);

        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
        }

        for (var skill in bio.skills) {
            var formattedSkill = HTMLskills.replace("%data%",bio.skills[skill]);
            $("#skills").append(formattedSkill);
        }
    }
};

//Define work object
var work = {

    //Array of objects for Jobs
    "jobs" : [
    {
        "employer" : "HSBC UK",
        "title"    : "Programming Analyst",
        "location" : "London, UK",
        "dates"    : "2010 - now",
        "description" : "Currently working as programming Analyst"
    },

    {
        "employer" : "HSBC Middle East",
        "title"    : "Software Engineer",
        "location" : "Dubai, UAE",
        "dates"    : "2008-2010",
        "description" : "Secondment from HSBC India"
    },

    {
        "employer" : "HSBC India",
        "title"    : "Software Engineer",
        "location" : "Pune, India",
        "dates"    : "2004-2008",
        "description" : "Started as Software Engineer"
    }
  ],

  //Display function helps to display work experience
  display: function () {

      for (var job in work.jobs) {

        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

        var formattedEmployerTitle = formattedEmployer + formattedTitle + 
                                     formattedDates + formattedLocation +
                                     formattedDescription;
        $(".work-entry:last").append(formattedEmployerTitle);
      }
  }

};

//Define project object
var project = {

   //Array of objects for projects
   "projects" : [
       {
         "title": "Online Portfolio",
         "dates": "present",
         "description": "Online portfolio sites built using HTML and CSS",
         "images" : ["images/fry.jpg", "images/fry.jpg"]
       },

       {
         "title": "Online Resume",
         "dates": "present",
         "description": "Online portfolio sites built using HTML, CSS and Java Script",
         "images" : ["images/fry.jpg", "images/fry.jpg"]
       },

       {
         "title": "HUB Projects",
         "dates": "2004-2015",
         "description": "Various HSBC In house projects in AS400 Platform",
         "images" : ["images/fry.jpg", "images/fry.jpg"]
       },
   ],

   //Display function helps to display project details
   display: function() {

      for (var index = 0; index < project.projects.length; index++) {

        $('#projects').append(HTMLprojectStart);

        formattedprojectTitle = HTMLprojectTitle.replace("%data%",project.projects[index].title);
        $('.project-entry:last').append(formattedprojectTitle);

        formattedprojectDates = HTMLprojectDates.replace("%data%",project.projects[index].dates);
        $('.project-entry:last').append(formattedprojectDates);
      
        formattedprojectDescription = HTMLprojectDescription.replace("%data%",project.projects[index].description);
        $('.project-entry:last').append(formattedprojectDescription);

        /*for (var i=0; i<project.projects[index].images.length; i++){
          $('.project-entry:last').append(HTMLprojectImage.replace("%data%",project.projects[index].images[i]));
        }*/
      }
   }
};

//Define education object
var education = {

    //Array of schools object
    "schools": [
    {
      "name": "Manipal Academy of Higher Education",
      "location": "Kerala, India",
      "degree": "Bachelors in Information Technology",
      "major": "Computer",
      "dates": "2004",
      "url": "www.mahe.com"
    },
    {
      "name": "Nehru Arts & Science College",
      "location": "Kerala, India",
      "degree": "Pre-degree",
      "major": "Science",
      "dates": "1998",
      "url": "www.nehru.com"
    }
   ],

   "onlineCourses": [
      {
        "title": "F/E Developer Nano degree",
        "school": "Udacity",
        "date": 2015,
        "url": "www.udacity.com"
      }
   ],

  //Display function helps to display education details
  display : function () {

    for (var school in education.schools) {
      $('#education').append(HTMLschoolStart);

      var formattedschoolName = HTMLschoolName.replace('%data%',education.schools[school].name);
      $('.education-entry:last').append(formattedschoolName);

      var formattedschoolDegree = HTMLschoolDegree.replace('%data%',education.schools[school].degree);
      $('.education-entry:last').append(formattedschoolDegree);

      var formattedschoolDates = HTMLschoolDates.replace('%data%',education.schools[school].dates);
      $('.education-entry:last').append(formattedschoolDates);

      var formattedschoolLocation = HTMLschoolLocation.replace('%data%',education.schools[school].location);
      $('.education-entry:last').append(formattedschoolLocation);

      var formattedschoolMajor = HTMLschoolMajor.replace('%data%',education.schools[school].major);
      $('.education-entry:last').append(formattedschoolMajor);
    }

    $('#education').append(HTMLonlineClasses);

    //Online courses
    for (var course in education.onlineCourses) {
      $('#education').append(HTMLschoolStart);
      $('.education-entry:last').append(HTMLonlineTitle.replace('%data%',education.onlineCourses[course].title));
      $('.education-entry:last').append(HTMLonlineSchool.replace('%data%',education.onlineCourses[course].school));
      $('.education-entry:last').append(HTMLonlineDates.replace('%data%',education.onlineCourses[course].date));
      $('.education-entry:last').append(HTMLonlineURL.replace('%data%',education.onlineCourses[course].url));
    }
  }

};

//Execute display function in respective object
bio.display();
work.display();
project.display();
education.display();

//Dispaly International button and change Name when buttton clicks
$('#main').append(internationalizeButton);
function inName(name) {
  name = name.split(" ");
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  return name[0] + ' ' + name[1];
}

//Display google map
$("#mapDiv").append(googleMap);
