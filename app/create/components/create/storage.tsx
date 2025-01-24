import { v4 as uuidv4 } from "uuid";
import { supabase } from "../../../../utils/supabase";

export const uploadStorage = async(file:any): Promise<any> => {
  const pathName = `public/blogimage/${uuidv4()}.jpg`;
  const { data, error } = await supabase.storage
    .from("BlogImage")
    .upload(pathName, file, {
      cacheControl: "3600",
      upsert: false,
    });
  if (error) throw error;
  const insertTableImageUrl = `${data.path}`;
  const publicURL = supabase.storage.from('BlogImage').getPublicUrl(insertTableImageUrl).data.publicUrl;
  return publicURL;
};