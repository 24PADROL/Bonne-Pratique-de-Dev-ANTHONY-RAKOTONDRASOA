const tasks = [
  { id: 1, title: 'Mettre à jour le README', completed: false },
  { id: 2, title: 'Corriger le bug du formulaire', completed: true },
  { id: 3, title: 'Revoir les PRs en attente', completed: false },
  { id: 4, title: 'Nettoyer le CSS', completed: true }
];

const tasksListEl = document.querySelector('#tasks-list');
const emptyStateEl = document.querySelector('#empty-state');

const filterAllBtn = document.querySelector('#filter-all-btn');
const filterActiveBtn = document.querySelector('#filter-active-btn');
const filterCompletedBtn = document.querySelector('#filter-completed-btn');

const FILTERS = {
  all: task => true,
  active: task => !task.completed,
  completed: task => task.completed
};

function updateTasksList(filterName = 'all') {
  const predicate = FILTERS[filterName] || FILTERS.all;
  const filtered = tasks.filter(predicate);

  tasksListEl.innerHTML = '';

  if (filtered.length === 0) {
    const messages = {
      all: 'Aucune tâche à afficher.',
      active: 'Aucune tâche en cours.',
      completed: 'Aucune tâche terminée.'
    };

    emptyStateEl.textContent = messages[filterName];
    emptyStateEl.style.display = 'block';
    return;
  }

  emptyStateEl.style.display = 'none';

  filtered.forEach(task => {
    const li = document.createElement('li');
    li.className = 'task-item' + (task.completed ? ' task-completed' : '');
    li.textContent = task.title;
    tasksListEl.appendChild(li);
  });
}


filterAllBtn.addEventListener('click', () => updateTasksList('all'));
filterActiveBtn.addEventListener('click', () => updateTasksList('active'));
filterCompletedBtn.addEventListener('click', () => updateTasksList('completed'));

updateTasksList();
