// DOM element where the Timeline will be attached
var container = document.getElementById('visualization');

// Create a DataSet (allows two way data-binding)
var items = new vis.DataSet([
  { id: 1, content: 'person 1', start: '2013-04-20', type: 'point', className:'warning'},
  { id: 2, content: 'person 2', start: '2013-04-14', type: 'point' , title: "I am a title"},
  { id: 11, content: 'person 11', start: '2013-04-15', type: 'point' , title: "I am a title"},

  { id: 3, content: 'person 3', start: '2013-04-18', type: 'point', editable: false , className:'warning'},
  { id: 4, content: 'person 4', start: '2013-04-26', end: '2013-04-28', type: 'range' },
  { id: 7, content: 'person 7', start: '2013-04-25', end: '2013-04-27', type: 'background' },

  { id: 5, content: 'person 5', start: '2013-04-21', type: 'point', className:'warning'},
  { id: 9, content: 'person 9', start: '2013-04-22', type: 'point', className:'warning'},

  { id: 6, content: 'person 6', start: '2013-04-21', type: 'point', className:'danger', style: "color: red;"  },
  { id: 10, start: new Date(2013,3,15,23,0,0), className:'danger', style: "color: red;" , type: 'point', content: '<div>person 10</div><img src="http://4.bp.blogspot.com/-TLq1EYW8tqY/Tu5mfadDG6I/AAAAAAAACI8/uppX51oXQ6U/s1600/Mission-_Impossible_-_Ghost_Protocol%2528movie_wallpaper_pictures_photo_pics_poster%2529mission-impossible-ghost-protocol_5-4e6de04979090-4edbb667423ba.jpg" style="width:50px; height:50px;">'},

  { id: 8, start: new Date(2013,3,21,23,0,0), className:'danger', style: "color: red;" , type: 'point', content: '<div>person 8</div><img src="http://4.bp.blogspot.com/-TLq1EYW8tqY/Tu5mfadDG6I/AAAAAAAACI8/uppX51oXQ6U/s1600/Mission-_Impossible_-_Ghost_Protocol%2528movie_wallpaper_pictures_photo_pics_poster%2529mission-impossible-ghost-protocol_5-4e6de04979090-4edbb667423ba.jpg" style="width:50px; height:50px;">'},


]);

// Configuration for the Timeline
var options = {
  editable: true,
  // margin: {
  //   item: 20,
  //   axis: 40
  // }
};

// Create a Timeline
var timeline = new vis.Timeline(container, items, options);

timeline.setOptions({
  orientation: {
    axis: "top", // bottom, none, both
    item: "top" //bottom
  },
  // height: 200 // px

});
