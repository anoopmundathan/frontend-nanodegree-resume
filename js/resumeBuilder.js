var bio = {

    "name" : "Anoop Mundathan",
    "role" : "Web Developer",
    "contacts" : {
        "mobile" : "07714951629",
        "email"  : "anoop.mundathan@gmail.com",
        "github" : "anoopmundathan",
        "twitter": "@anoopmundathan",
        "location" : "London"
    },
    "welcomeMessage" : "Hello World",
    "skills" : [
        "HTML", "CSS", "Java Script"
    ],
    "bioPic": "images/profile.jpg"
};

var work = {

  "jobs" : [
    {
        "employer" : "HSBC UK",
        "title"    : "Programming Analyst",
        "location" : "London",
        "dates"    : "present",
        "description" : "Currently working as programming Analyst"
    },

    {
        "employer" : "HSBC India",
        "title"    : "Senior Software Engineer",
        "location" : "Pune",
        "dates"    : "2004-2010",
        "description" : "This is my first job as programming Analyst"
     }
  ]
};

var project = {

   "projects" : [
       {
         "title": "GSIF",
         "dates": "present",
         "description": "Risk projects,dfldsjldsjfdsfjldsfj ldsfd",
         "images" : "../a.jpg"
       },
       {
          "title": "Turkey",
          "dates": "Jan15",
          "description": "HUB 4.0 Implementation",
          "images": "../b.jpg"
       },
       {
          "title": "GPS",
          "dates": "2012-2014",
          "description": "Global payment project",
          "images": "../c.jpg"
       }
   ],

   /*display: function() {

   
      for (var index = 0; index < project.projects.length; index++) {

        $('#projects').append(HTMLprojectStart);

        formattedprojectTitle = HTMLprojectTitle.replace("%data%",project.projects[index].title);
        $('.project-entry:last').append(formattedprojectTitle);

        formattedprojectDates = HTMLprojectDates.replace("%data%",project.projects[index].dates);
        $('.project-entry:last').append(formattedprojectDates);
      
        formattedprojectDescription = HTMLprojectDescription.replace("%data%",project.projects[index].description);
        $('.project-entry:last').append(formattedprojectDescription);

      }

   }*/
};


var education = {
    "schools": [
    {
      "name": "MAHE",
      "location": "Banglore",
      "degree": "Information Technology",
      "major": "Computer",
      "dates": "2004",
      "url": "www.mahe.com"
    },
    {
      "name": "Nehru Arts & Science",
      "location": "Kerala",
      "degree": "Pre-degree",
      "major": "Science",
      "dates": "1998",
      "url": "www.nehru.com"
    }
   ],

   "onlineCourse": [
      {
        "title": "F/ENanodegree",
        "school": "Udacity",
        "dates": 2015,
        "url": "Udacity.com"
      },

      {
        "title": "Android Nanodegree",
        "school": "Udacity",
        "dates": 2015,
        "url": "Udacity.com"
      }
   ]
};



displaySkills();
displayWork();



function displaySkills() {
    if (bio.skills.length > 0) {
	     $("#header").append(HTMLskillsStart);
       var formattedSkill;
    }

    for (var skill in bio.skills) {
          formattedSkill = HTMLskills.replace("%data%",bio.skills[skill]);
          $("#skills").append(formattedSkill);
       }
}


function displayWork() {

	for (job in work.jobs){

		$("#workExperience").append(HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

			var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedDates + formattedLocation + 
	                              formattedDescription;

			$(".work-entry:last").append(formattedEmployerTitle);

		}
}

function inName(name) {

  name = name.split(" ");
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  console.log (name[0]+ ' '+name[1]);
  return name[0] + ' ' + name[1];

}



project.display = function() {

   
      for (var index = 0; index < project.projects.length; index++) {

        $('#projects').append(HTMLprojectStart);

        formattedprojectTitle = HTMLprojectTitle.replace("%data%",project.projects[index].title);
        $('.project-entry:last').append(formattedprojectTitle);

        formattedprojectDates = HTMLprojectDates.replace("%data%",project.projects[index].dates);
        $('.project-entry:last').append(formattedprojectDates);
      
        formattedprojectDescription = HTMLprojectDescription.replace("%data%",project.projects[index].description);
        $('.project-entry:last').append(formattedprojectDescription);

      }
}

project.display();

$('#main').append(internationalizeButton);
$("#mapDiv").append(googleMap);



var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedHeader = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedHeader);


$("#topContacts").append(HTMLcontactGeneric);
$("#topContacts").append(HTMLmobile);
$("#topContacts").append(HTMLemail);
$("#topContacts").append(HTMLtwitter);
$("#topContacts").append(HTMLgithub);
$("#topContacts").append(HTMLblog);
$("#topContacts").append(HTMLlocation);





