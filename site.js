document.querySelectorAll('[data-filter]').forEach(button=>{
  button.addEventListener('click',()=>{
    const category=button.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));
    let count=0;
    document.querySelectorAll('[data-category]').forEach(card=>{
      card.hidden=category!=='all'&&!card.dataset.category.split(' ').includes(category);
      if(!card.hidden) count++;
    });
    const result=document.getElementById('result-count');
    if(result) result.textContent=`${count} fictional ${count===1?'shop':'shops'}`;
  });
});
const checklist=document.getElementById('thrift-checklist');
if(checklist){
  const boxes=Array.from(checklist.querySelectorAll('input[type="checkbox"]'));
  const update=()=>{document.getElementById('check-progress').textContent=`${boxes.filter(box=>box.checked).length} of ${boxes.length} checked`;};
  boxes.forEach(box=>box.addEventListener('change',update));
  document.getElementById('reset-checklist').addEventListener('click',()=>{boxes.forEach(box=>box.checked=false);update();});
  update();
}
