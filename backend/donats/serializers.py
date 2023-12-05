from rest_framework import serializers

from .models import Donat


class DonatSerializer(serializers.HyperlinkedModelSerializer):
    def __init__(self, *args, **kwargs):
        super(DonatSerializer, self).__init__(*args, **kwargs)
        request = self.context.get('request')
        if request and (request.method == 'POST' or request.method == 'PUT' or request.method == 'PATCH'):
            self.Meta.depth = 0
        else:
            self.Meta.depth = 1
    class Meta:
        model = Donat
        fields = ['url', 'id', 'summ', 'user']
        depth = 1
