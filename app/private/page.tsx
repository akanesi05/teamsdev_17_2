import { redirect } from "next/navigation";

import { createClient } from "../../utils/server";

/**
 * ログインしたユーザーのみがアクセスできるページです
 * サインアップ後に送られてきたメールから遷移できます
 */
export default async function PrivatePage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/signin");
  }

  return <p>Hello {data.user.email}</p>;
}
