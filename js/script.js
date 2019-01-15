document.addEventListener('DOMContentLoaded', function() {
    function randomString() {
        const chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
        let str = '';
        for (let i = 0; i < 10; i++) {
            str += chars[Math.floor(Math.random() * chars.length)];
        }
        return str;
    }

    function generateTemplate(name, data, basicElement) {
        const template = document.getElementById(name).innerHTML;
        const element = document.createElement(basicElement || 'div');
      
        Mustache.parse(template);
        element.innerHTML = Mustache.render(template, data);
      
        return element;
      }

    function Column(name) {
        const self = this;
      
        this.id = randomString();
        this.name = name;
        this.element = generateTemplate('column-template', { name: this.name, id: this.id });
      
        this.element.querySelector('.column').addEventListener('click', function (event) {
          if (event.target.classList.contains('btn-delete')) {
            self.removeColumn();
          }
      
          if (event.target.classList.contains('add-card')) {
            self.addCard(new Card(prompt("Enter the name of the card")));
          }
        });
    }

    Column.prototype = {
        addCard: function(card) {
          this.element.querySelector('ul').appendChild(card.element);
        },
        removeColumn: function() {
          this.element.parentNode.removeChild(this.element);
        }
    };

    function Card(description) {
        const self = this;
      
        this.id = randomString();
        this.description = description;
        this.element = generateTemplate('card-template', { description: this.description }, 'li');
      
        this.element.querySelector('.card').addEventListener('click', function (event) {
          event.stopPropagation();
      
          if (event.target.classList.contains('btn-delete')) {
            self.removeCard();
          }
        });
    }
    
    Card.prototype = {
        removeCard: function() {
            this.element.parentNode.removeChild(this.element);
        }
    }

    function initSortable(id) {
        var el = document.getElementById(id);
        var sortable = Sortable.create(el, {
          group: 'kanban',
          sort: true
        });
    }

    let board = {
        name: 'Kanban Board',
        addColumn: function(column) {
          this.element.appendChild(column.element);
          initSortable(column.id); //About this feature we will tell later
        },
        element: document.querySelector('#board .column-container'),
    };
    document.querySelector('#board .create-column').addEventListener('click', function() {
        let name = prompt('Enter a column name');
        const column = new Column(name);
        board.addColumn(column);
    });


    // CREATING COLUMNS
    const todoColumn = new Column('To do');
    const doingColumn = new Column('Doing');
    const doneColumn = new Column('Done');

    // ADDING COLUMNS TO THE BOARD
    board.addColumn(todoColumn);
    board.addColumn(doingColumn);
    board.addColumn(doneColumn);

    // CREATING CARDS
    const card1 = new Card('New task');
    const card2 = new Card('Create kanban boards');

    // ADDING CARDS TO COLUMNS
    todoColumn.addCard(card1);
    doingColumn.addCard(card2)
});