# Generated by Django 3.0.3 on 2020-05-17 15:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('groups', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='group',
            options={'ordering': ['name'], 'permissions': (('can_drive', 'can take jobs'),)},
        ),
    ]
