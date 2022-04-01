async function newFormHandler(event) {
  alert("clicked submit")
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const post_url = document.querySelector('input[name="post-url"]').value;
  const content = document.querySelector('input[name="post-content"]').value;
  const property_type = document.querySelector('select[name="property-type"]').value;
  const loan_type = document.querySelector('select[name="loan-type"]').value;
  const down_payment = document.querySelector('select[name="down-payment"]').value;
  const credit_score = document.querySelector('select[name="credit-score"]').value;
  const employment = document.querySelector('select[name="employment"]').value;
 const condition = document.querySelector('select[name="condition"]').value;
 

  
  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      content,
      post_url,
      property_type,
      loan_type,
      down_payment,
      credit_score,
      employment,
      condition

    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    document.location.replace('/');
  }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
