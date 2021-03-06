import { mixin } from '../Utils/Mixin.js'

import Attributes from './Attributes.js'
import Iteration from './Iteration.js'
import Content from './Content.js'
import Events from './Events.js'

const _NODES = new WeakMap();


export default class aQuery extends mixin(Attributes, Iteration, Content, Events) {

    constructor(nodes) {

        super();

        if( !Array.isArray(nodes) ) {
            nodes = [nodes];
        }

        _NODES.set(this, nodes);
    }

    get(index) {

        let nodes = _NODES.get(this);

        if( Number.isInteger(index) ) {

            return nodes[index];

        }

        return nodes;

    }

    *[Symbol.iterator]() {

        yield *this.get();

    }
    
    static create(nodes) {

        return new aQuery(nodes);

    }

}
