import { toast } from "react-toastify";

export async function DeletePostUser(
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  id: number | string,
  token: string | null,
  baseURL: string
) {
  try {
    const response = await fetch(`${baseURL}/posts/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      console.log(response);
      return;
    }

    const data = await response.json();

    toast.success(data.sucess);
  } catch (e: any) {
    console.log(e.message);
  }
}
