export default function NameInput({ setFormData, formData }: any) {
  return (
    <input
      type="text"
      placeholder="The launching of reschedule"
      autoComplete="off"
      onKeyUp={(e) => setFormData({ ...formData, name: e.target.value })}
    />
  );
}
