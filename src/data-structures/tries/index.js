import TrieNode from "./TrieNode";

class Tries {
  constructor() {
    this.root = null;
  }

  getChildNode(ch) {
    if (this.root !== null) {
      for (let i = 0; i < 26; i += 1) {
        if (this.root.child[i] && this.root.child[i].data === ch) {
          return this.root.child[i];
        }
      }
    }
    return null;
  }

  insert(word) {
    let level;
    let length;
    let index;
    const root = this.root;
    
    if (!this.root) {
      const newNode = new TrieNode();
      newNode.data = word;
      for(i)
    }
  }
}

export default Tries;
