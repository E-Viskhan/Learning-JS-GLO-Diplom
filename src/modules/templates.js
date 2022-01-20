const getRepairItem = (name, units, cost) =>
  `<tr class="mobile-row">
  <td class="repair-types-name">${name}</td>
  <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>
  <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>
  <td class="repair-types-value">${units === 'м2' ? 'м<sup>2</sup>' : units}</td>
  <td class="repair-types-value">${cost} руб.</td>
</tr>`;

const getRepairType = (name, index) =>
  `<button
    class="button_o popup-repair-types-nav__item ${index === 0 ? 'popup-repair-types-nav__item--active' : ''}"
    data-repair-type="${name}">${name}</button>`;


export { getRepairItem, getRepairType };