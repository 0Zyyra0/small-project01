from django.shortcuts import render


def index_view(request):

    context = {
        "name": "Ali Moradi",

        "bio": "I am a Python and Django developer interested in web development. I have experience building websites using Django, HTML and CSS.",

        "email": "example@gmail.com",
        "phone": "09120000000",

        "education": [
            "Computer Engineering - Tehran Markaz University",
        ],

        "skills": [
            "Python",
            "Django",
            "HTML / CSS",
            "Git & GitHub",
        ],

        "languages": [
            "Persian - Native",
            "English - Intermediate",
        ],

        "projects": [
            "Apex Portfolio Website",
            "Django Blog Project",
            "Personal Resume Website",
        ],
    }

    return render(request, "index.html", context)