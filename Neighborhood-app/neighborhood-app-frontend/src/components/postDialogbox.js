import { TextareaAutosize } from "@mui/material";

export default function PostDialogbox()
{
    return(
        <div>
            <TextareaAutosize
      maxRows={10}
      minRows={10}
      aria-label="maximum height"
      placeholder="Maximum 4 rows"
      defaultValue="Write the post here"
      style={{ width: 450 }}
    />
        </div>
    );
}
