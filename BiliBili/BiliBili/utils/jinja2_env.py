from jinja2 import Environment
from django.urls import reverse
from django.contrib.staticfiles.storage import staticfiles_storage

def Jinja2_Environment(**opion):

    env = Environment(**opion)

    env.globals.update({
        "static": staticfiles_storage.url,
        "url": reverse

    })
    return env
