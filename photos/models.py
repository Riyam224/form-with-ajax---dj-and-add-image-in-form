from django.db import models
from django.utils.translation import ugettext_lazy as _

# Create your models here.


class Photo(models.Model):
    name = models.CharField(_("name"), max_length=50)
    desc = models.TextField(_("desc") , max_length=1000)
    image = models.ImageField(_("image") , upload_to="images")
    created = models.DateTimeField(_("created at"), auto_now_add=True)
    

    class Meta:
        verbose_name = _("Photo")
        verbose_name_plural = _("Photos")

    def __str__(self):
        return self.name

