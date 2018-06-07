import {Point} from './point';
import {LikeButton} from './likeButton';

//let point = new Point(1, 2);
// let x = point.x;
// point.x = 10;
//point.draw();

let likeButton = new LikeButton(23, false);
likeButton.onClick();
console.log(`Likes : ${likeButton.likes}, Selected: ${likeButton.isSelected}`);
likeButton.onClick();
console.log(`Likes : ${likeButton.likes}, Selected: ${likeButton.isSelected}`);
