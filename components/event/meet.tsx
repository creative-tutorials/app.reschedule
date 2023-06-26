export default function Meet({ setFormData, formData }: any) {
  return (
    <select
      name=""
      id=""
      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
    >
      <option value="Choose a meetup">Choose a meetup</option>
      <option value="Phone call">Direct Call</option>
      <option value="WhatsApp">WhatsApp</option>
    </select>
  );
}
