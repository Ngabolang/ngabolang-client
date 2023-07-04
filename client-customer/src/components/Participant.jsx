export default function Participant({user}) {
  return (
    <li class="py-3 sm:py-4">
      <div class="flex items-center space-x-4">
        <div class="flex-shrink-0">
          <img
            class="w-8 h-8 rounded-full"
            src={user.photoProfile}
            alt="Bonnie image"
          ></img>
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
            {user.username}
          </p>
          <p class="text-sm text-gray-500 truncate dark:text-gray-400">
            {user.email}
          </p>
        </div>
      </div>
    </li>
  );
}
