$(document).ready(function() {
  $(function() {
    $('[data-toggle="tooltip"]').tooltip();
  });
  var commitArea = $('.textarea-js');
  console.log(commitArea);
  var submit = $('.submit-js');
  var commits = $('commits-js');
  $(commitArea).on('input', function() {
console.log(commitArea.val())
  })
  $(submit).on('click', function() {
    if (commitArea.val()) {
      var newCommit =
     '<div class="commit--styles commit--size padding-10">' + '<p class="text-right">' + '<a type="button" class="btn btn-default" data-toggle="tooltip" data-placement="left" title="Tooltip on left">' + '<i class="fa fa-hand-rock-o"></i></a>' + '' + '<a type="button" class="btn btn-default" data-toggle="tooltip" data-placement="left" title="Tooltip on left">' + '<i class="fa fa-heart"></i></p></a>' + '<p class="text-left">' + commitArea.val() + '</p></div>' ;
      commits.append(template);
      commitArea.value = '';
    };
  });
});
