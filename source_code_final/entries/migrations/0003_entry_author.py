# Generated by Django 3.2.5 on 2021-07-08 16:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('entries', '0002_alter_entry_options'),
    ]

    operations = [
        migrations.AddField(
            model_name='entry',
            name='author',
            field=models.CharField(default='Rebecca', max_length=200),
            preserve_default=False,
        ),
    ]