document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('search');
  const searchButton = document.getElementById('search-button');
  const suggestionsContainer = document.getElementById('suggestions-container');

  const categoryMappings = {
    'training': 'training.html',
    'sit': 'training.html#sit',
    'stay': 'training.html#stay',
    'come': 'training.html#come',
    'leave it': 'training.html#leave-it',
    'door dashing': 'training.html#door-dashing',
    'crawl': 'training.html#crawl',
    'shake hand': 'training.html#shake-hand',
    'barking': 'training.html#barking',
    'roll over': 'training.html#roll-over',
    'spin': 'training.html#spin',
    'high five': 'training.html#high-five',
    'behaviour': 'training.html#behaviour',
    'excessive barking': 'training.html#excessive-barking',
    'jumping': 'training.html#jumping',
    'chewing': 'training.html#chewing',
    'leash pulling': 'training.html#leash-pulling',
    'anxiety': 'training.html#anxiety',
    'aggressive': 'training.html#aggressive',
    'hygiene': 'hygiene.html',
    'grooming': 'hygiene.html#grooming',
    'bathing': 'hygiene.html#bathing',
    'shampoo': 'hygiene.html#shampoo',
    'nail trimming': 'hygiene.html#nail-trimming',
    'skin': 'hygiene.html#skin',
    'nutrition': 'nutrition.html',
    'food': 'nutrition.html#food',
    'home food': 'nutrition.html#home-food',
    'commercial food': 'nutrition.html#commercial-food',
    'diet': 'nutrition.html#diet',
    'diet plan': 'nutrition.html#diet-plan',
    'health': 'vet.html',
    'vaccination': 'vet.html#vaccination',
    'contact':'contact.html'
  };

  searchInput.addEventListener('input', function () {
    const inputValue = searchInput.value.toLowerCase().trim();
    const matchedCategories = Object.keys(categoryMappings).filter(category =>
      category.toLowerCase().includes(inputValue)
    );

    displaySuggestions(matchedCategories);
  });

  searchButton.addEventListener('click', redirectToCategory);

  function redirectToCategory() {
    const inputValue = searchInput.value.trim().toLowerCase();
    const url = categoryMappings[inputValue];

    if (url) {
      window.location.href = url;
    }
  }

  function displaySuggestions(suggestions) {
    suggestionsContainer.innerHTML = '';

    suggestions.forEach(suggestion => {
      const suggestionItem = document.createElement('div');
      suggestionItem.classList.add('suggestion-item');
      suggestionItem.textContent = suggestion;

      suggestionItem.addEventListener('click', function () {
        searchInput.value = suggestion;
        redirectToCategory();
      });

      suggestionsContainer.appendChild(suggestionItem);
    });

    suggestionsContainer.style.display = 'block';
  }
});

function searchToggle(obj, evt) {
  var container = obj.closest('.search-wrapper');
  if (!container.classList.contains('active')) {
    container.classList.add('active');
    evt.preventDefault();
  } else if (container.classList.contains('active') && !obj.closest('.input-holder')) {
    container.classList.remove('active');
    container.querySelector('.search-input').value = '';
  }
}

// Attach the searchToggle function to the searchInput
document.getElementById('search').addEventListener('click', function (e) {
  searchToggle(this, e);
});

console.clear();
const list = document.querySelectorAll('.list');
const nav = document.querySelector('.navigation');
list.forEach(item => item.addEventListener('click', function(e){
  list.forEach(li => li.classList.remove('active'));
  e.currentTarget.classList.add('active');
}));

// Smooth scrolling for internal links
document.addEventListener('DOMContentLoaded', function () {
  // Get all internal links in the footer
  const internalLinks = document.querySelectorAll('footer a[href^="#"]');

  // Add a click event listener to each internal link
  internalLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      // Prevent the default behavior of the linxk
      e.preventDefault();

      // Get the target element based on the href attribute of the link
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      // Scroll to the target element smoothly
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});




