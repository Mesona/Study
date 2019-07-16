function inOrderArray(root) {
  if (root !== null) {
    let result = [];
    result = result.concat(inOrderArray(root.left))
    result = result.concat(root.val)
    result = result.concat(inOrderArray(root.right))
    return result;

  } else {
    return [];
  }
  // let result = [];
  // if (root.val === undefined) {
  //   return [];
  // } else {
  //   if (root.left !== null) {
  //     // return result = result.concat(inOrderArray(root.left));
  //     return inOrderArray(root.left);
  //   } else if (root.right !== null) {
  //     // return result = result.concat(inOrderArray(root.right))
  //     return inOrderArray(root.right)
  //   } else {
  //     return root.val;
  //   }
  // }

}

function postOrderArray(root) {
  if (root !== null) {
    let result = [];
    result = result.concat(postOrderArray(root.left))
    result = result.concat(postOrderArray(root.right))
    result = result.concat(root.val)
    return result

  } else {
    return [];
  }

}


module.exports = {
    inOrderArray,
    postOrderArray
};