'use client'
import { useRouter } from 'next/navigation';

const games = [
    { id: 1, title: 'Save the Monkey', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: '/images/card-img.png' },
    { id: 2, title: 'Escape the Jungle', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: '/images/card-img.png' },
    { id: 3, title: 'Monkey Runner', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: '/images/card-img.png' }
];

export default function MyGames() {
    const router = useRouter();

    const handleViewGameClick = (gameId: number) => {
        router.push(`/mygames/game-details/${gameId}`);
    };

    return (
        <>
            <div className="container mx-auto px-4">
                <div className="mb-10">
                    <h1 className="font-bold text-5xl leading-tight text-[#45f882]">My Games</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {games.map((game) => (
                        <div key={game.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-[#171816] rounded-[24px] p-5">
                            <img className="w-full rounded-[20px]" src={game.image} alt="Card image" />
                            <div className="py-4 flex flex-col gap-3">
                                <span className="bg-[#ffffff1a] text-[12px] leading-[21.78px] font-[600] rounded-[4px] py-1 px-3 w-fit">Mini Game</span>
                                <div className="font-bold text-xl">{game.title}</div>
                                <p className="text-[#ffffffb3] text-[14px] leading-[22.12px] font-medium">
                                    {game.description}
                                </p>
                            </div>
                            <div className="pb-2">
                                <button
                                    onClick={() => handleViewGameClick(game.id)}
                                    className="bg-[#ffffff33] text-[16px] leading-[21.78px] text-[#45f882] font-bold py-2 px-8 rounded-[8px]"
                                >
                                    View Game
                                </button>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </>
    );
}
