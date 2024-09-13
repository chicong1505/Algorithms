/* 
    Đề bài: Viết hàm loại bỏ các phần tử trùng lặp trong mảng và trả về một mảng chỉ chứa các phần tử duy nhất.
    Ví dụ:
        Input: [1, 2, 2, 3, 4, 4, 5]
        Output: [1, 2, 3, 4, 5]
*/

const test = document.getElementById("test");
const test1 = document.getElementById("test1");

const arr = [1, 2, 2, 3, 3, 4, 4, 6];
const mySet = new Set(arr);

const unique = Array.from(mySet);
test.innerHTML = unique;

const arr1 = [1, 2, 2, 3, 3, 4, 4, 6];

function removeDuplicate(arr) {
  return [...new Set(arr)];
}

test1.innerHTML = removeDuplicate(arr1);
