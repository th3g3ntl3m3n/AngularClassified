app.directive("myDir", function(){
  return { template: "<h3>Square of {{ point }} : {{point * point}}</h3>"	};
});
