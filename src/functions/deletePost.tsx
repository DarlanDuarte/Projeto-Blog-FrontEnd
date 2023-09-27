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

    return {
      data,
    };
  } catch (e: any) {
    console.log(e.message);
  }
}
