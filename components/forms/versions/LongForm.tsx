"use client";

import TextInput from "@/components/forms/parts/TextInput";
import Form from "@/components/forms/Form";
import Button from "@/components/parts/Button";

function LongForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission...
  };

  const handleChange = (value: string) => {
    // Handle form value change...
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TextInput
        id="name"
        name="Name"
        label="Name"
        value="test" // Replace with your form value
        onChange={handleChange} // Replace with your onChange handler
        placeholder="Your name"
      />
      <Button href="/about">Submit</Button>
    </Form>
  );
}

export default LongForm;
