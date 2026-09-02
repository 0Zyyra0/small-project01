from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, JsonResponse
from django.utils import timezone
from website.models import Post


def index_view(request):
    context = {
        'full_name': 'علی مرادی',
        'job_title': 'دانش‌آموز رشته ریاضی فیزیک',
        'bio': 'دانش‌آموز پایه دوازدهم رشته ریاضی فیزیک هستم و به دنیای برنامه‌نویسی و طراحی علاقه‌مندم. در کنار درس، به یادگیری پایتون و جنگو مشغولم و از ابزارهای طراحی مثل فتوشاپ هم برای کارهای گرافیکی استفاده می‌کنم. هدفم ادامه‌ی مسیر تحصیلی در حوزه‌ی مرتبط با علوم کامپیوتر و توسعه‌ی مهارت‌های فنی‌مه.',
        'email': 'alimoradi@gmail.com',
        'city': 'تهران، استان تهران',
        'education': [
            {'title': 'پایه دوازدهم — رشته ریاضی فیزیک', 'status': 'در حال تحصیل'},
        ],
        'skills': ['پایتون (Python)', 'جنگو (Django)', 'فتوشاپ (Photoshop)'],
        'languages': [
            {'name': 'فارسی', 'level': 'زبان مادری'},
            {'name': 'انگلیسی', 'level': 'سطح B1'},
        ],
        'projects': [
            {'title': '[نام پروژه]', 'description': '[توضیح کوتاه درباره پروژه و تکنولوژی‌های استفاده‌شده]'},
        ],
    }
    return render(request, 'index.html', context)


def post_list_view(request):
    posts = Post.objects.filter(published_date__lte=timezone.now()).order_by('-published_date')
    return render(request, 'post_list.html', {'posts': posts})


def post_detail_view(request, pk):
    post = get_object_or_404(Post, pk=pk)
    post.counted_view += 1
    post.save()
    return render(request, 'post_detail.html', {'post': post})