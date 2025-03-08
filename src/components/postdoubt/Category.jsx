import { Box, Text, Select } from "@radix-ui/themes";
import { forwardRef, useImperativeHandle, useState } from 'react';

const Category = forwardRef((props, ref) => {
  const [value, setValue] = useState('0');

  useImperativeHandle(ref, () => ({
    value: value
  }));

  return (
    <Box>
      <Text as="label" size="3" weight="bold" className="block mb-2">
        Category
      </Text>
      <Select.Root 
        defaultValue="0" 
        onValueChange={setValue}
      >
        <Select.Trigger className="w-2/3" />
        <Select.Content>
          <Select.Group>
            <Select.Label>Select Category</Select.Label>
            <Select.Item value="0" disabled>Select Category</Select.Item>
            <Select.Item value="Maths">Maths</Select.Item>
            <Select.Item value="DSA">DSA</Select.Item>
            <Select.Item value="Frontend">Frontend</Select.Item>
            <Select.Item value="Backend">Backend</Select.Item>
            <Select.Item value="AI/ML">AI/ML</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select.Root>
    </Box>
  );
});

Category.displayName = 'Category';
export default Category;