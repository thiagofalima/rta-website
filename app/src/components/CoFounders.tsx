import { Avatar, HStack, Stack, Text } from "@chakra-ui/react"
import andre from "../assets/Andre.png"
import felipe from "../assets/felipe.jpg"
import thiago from "../assets/thiago_foto.jpeg"

export const CoFounders = () => {
  return (
    <Stack gap="8">
      {users.map((user) => (
        <HStack key={user.role} gap="4">
          <Avatar.Root>
            <Avatar.Fallback name={user.name} />
            <Avatar.Image src={user.avatar} />
          </Avatar.Root>
          <Stack gap="0">
            <Text fontWeight="medium">{user.name}</Text>
            <Text color="fg.muted" textStyle="sm">
              {user.role}
            </Text>
          </Stack>
        </HStack>
      ))}
    </Stack>
  )
}

const users = [
  {
    id: "1",
    name: "Felipe Richter",
    role: "Product Owner / Devsenvolvedor Back-end",
    avatar: felipe,
  },
  {
    id: "2",
    name: "Thiago Lima",
    role: "Desenvolvedor Full Stack",
    avatar: thiago,
  },  
  
  {
    id: "3",
    name: "André Rodrigues",
    role: "Administração / Jurídico",
    avatar: andre,
  },
]
