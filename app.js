/* Bobaremember - A to-do list planner web app */

// Global variables for application state
var tasks = [];
var currentFilter = 'all';

// Global variables for DOM elements
var taskForm;
var taskInput;
var taskPriority;
var taskDate;
var taskList;
var itemsLeft;
var filterButtons;

/* Updates the document title with task count */
function updateDocumentTitle() {
    document.title = tasks.length + " Tasks • Bobaremember";
}

/* Initialize the application */
function initApp() {
    console.log('Initializing Bobaremember app.');

    // Select form elements
    taskForm = document.getElementById('task-form');
    taskInput = document.getElementById('task-input');
    taskPriority = document.getElementById('task-priority');
    taskDate = document.getElementById('task-date');

    // Select task list elements
    taskList = document.getElementById('task-list');
    itemsLeft = document.getElementById('items-left');

    // Select all filter buttons
    filterButtons = document.querySelectorAll('filter-btn');

    // Update the document title
    updateDocumentTitle();

    console.log('Bobaremember app initialized.');
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);
