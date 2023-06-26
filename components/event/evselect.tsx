export default function EventSelect({ setFormData, formData }: any) {
  return (
    <select
      name=""
      id=""
      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
    >
      <option value="Weddings">Weddings</option>
      <option value="Corporate events">Corporate events</option>
      <option value="Trade shows">Trade shows</option>
      <option value="Conferences">Conferences</option>
      <option value="Concerts">Concerts</option>
      <option value="Festivals">Festivals</option>
      <option value="Sporting events">Sporting events</option>
      <option value="Galas">Galas</option>
      <option value="Awards ceremonies">Awards ceremonies</option>
      <option value="Fundraisers">Fundraisers</option>
      <option value="Charity events">Charity events</option>
      <option value="Exhibitions">Exhibitions</option>
      <option value="Seminars">Seminars</option>
      <option value="Workshops">Workshops</option>
      <option value="Networking events">Networking events</option>
    </select>
  );
}
