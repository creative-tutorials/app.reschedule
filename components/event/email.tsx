export default function EmailInput({ evt, setFormData, formData }: any) {
  return (
    <input
      type="text"
      placeholder="reschedulelabs@hivemi.com"
      autoComplete="off"
      id={evt.email}
      onKeyUp={(e) => setFormData({ ...formData, email: e.target.value })}
    />
  );
}
