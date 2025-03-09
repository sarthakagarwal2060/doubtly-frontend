import HeadingOfSection from "./headingofsection";
import Category from "./Category";
import { useRef } from "react";
import { Button, Card, Text, Box } from "@radix-ui/themes";
import { handleSubmit } from "../../pages/PostDoubt";
// import { Button } from "@radix-ui/themes"

export default function MainComponent({
  titleRef,
  descriptionRef,
  categoryRef,
}) {
  const handleClick = () => {
    handleSubmit(titleRef, descriptionRef, categoryRef);
  };

  return (
    <Box className="flex items-center justify-center bg-gray-100 w-full pl-[5rem]">
      <Card className="mx-auto w-full max-w-[90%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[65%] p-4 sm:p-6 md:p-8">
        <Box className="space-y-2 mb-6">
          <Text size="6" weight="bold" align="center">Post a Doubt</Text>
        </Box>

        <HeadingOfSection
          name="Doubt Title"
          placeholder="Summarize your doubt in one line"
          ref={titleRef}
        />

        <HeadingOfSection
          name="Description"
          placeholder="Provide detailed context, what you've tried, and where you're stuck"
          isLarge={true}
          ref={descriptionRef}
        />

        <Box className="mb-6">
          <Category ref={categoryRef} />
        </Box>

        <Box className="flex justify-end">
          <Button 
            size="3" 
            color="blue"
            onClick={handleClick}
          >
            Post Doubt
          </Button>
        </Box>
      </Card>
    </Box>
  );
}
