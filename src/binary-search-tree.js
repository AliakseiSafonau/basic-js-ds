const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.roots = null;
}

  root() {
    if (this.roots) {
      return this.roots
    } else return null
  }

  add(data) {
    const anotherNode = new Node(data)
    if (!this.roots) {
      this.roots = anotherNode
      return
    }
    let currentNode = this.roots
    while (currentNode) {
      if(anotherNode.data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = anotherNode
          return
        }
        currentNode = currentNode.left
      } else {
        if (!currentNode.right) {
          currentNode.right = anotherNode
          return
        }
        currentNode = currentNode.right
      }
    }
  }

  has(data1) {
    function rec(datas) {
      if(datas.data === data1) {
        result = true
        return
      }
      if (datas.left) {
          rec(datas.left)
      }
      if (datas.right) {
        rec(datas.right)
      }
    }
    if (!this.roots) {
      return false
    }
    let result = false;
    rec(this.roots);
    return result
  }

  find(data2) {
    function rec(datas) {
      if(datas.data === data2) {
        result = datas
        return
      }
      if (datas.left) {
          rec(datas.left)
      }
      if (datas.right) {
        rec(datas.right)
      }
    }
    if (!this.roots) {
      return false
    }
    let result = null;
    rec(this.roots);
    return result
  }

  remove(data3) {
    function rec2(datass){
      let parrent1;
      if(!datass.left && !datass.right) {
        if (parrent[1] === 'left') {parrent[0].left = null; return} else {parrent[0].right = null; return}
      }
      if(!datass.left && datass.right) {
        if (parrent[1] === 'left') {parrent[0].left = datass.right; return} else {parrent[0].right = datass.right; return}
      }
      if(datass.left && !datass.right) {
        if (parrent[1] === 'left') {parrent[0].left = datass.left; return} else {parrent[0].right = datass.left; return}
      }
      if(datass.left && datass.right) {
        let elem = datass.left;
        if (elem.right) {
          while (elem.right) {
            parrent1 = elem
            elem = elem.right
          }
        } else {if (parrent) {if (parrent[1] === 'left') {parrent[0].left = elem;return} else {parrent[0].right = elem; return}}}
        datass.data = elem.data;
        parrent1 = null
      }
    }
    function rec(datas) {
      if(datas.data === data3) {
        rec2(datas);
        return
      }
      if (datas.left) {
        parrent = [datas, 'left']
        rec(datas.left)
      }
      if (datas.right) {
        parrent = [datas, 'right']
        rec(datas.right)
      }
    }
    if (!this.roots) {
      return
    }
    let parrent;
    rec(this.roots);
  }

  min() {
    function rec(datas) {
      if (datas.left) {
          rec(datas.left)
      } else result = datas.data
    }
    if (!this.roots) {
      return false
    }
    let result = false;
    rec(this.roots)
    return result
  }

  max() {
    function rec(datas) {
      if (datas.right) {
          rec(datas.right)
      } else result = datas.data
    }
    if (!this.roots) {
      return false
    }
    let result = false;
    rec(this.roots)
    return result
  }
}

module.exports = {
  BinarySearchTree
};