from django.conf.urls import url
from . import views


urlpatterns = [
    # url(r'^admin/', admin.site.urls),
    url(r'^register/$',views.RegisterView.as_view(),name="register"),
    url(r'^username_count/$',views.UserCountVIew.as_view()),
    url(r'^mobile_count/$',views.PhoneView.as_view()),
]
