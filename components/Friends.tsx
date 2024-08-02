'use client'

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import IceCubes from '@/icons/IceCubes';
import { ToastContainer, toast } from 'react-toastify';
import { useGameStore } from '@/utils/game-mechaincs';
import { baseGift, bigGift } from '@/images';
import IceCube from '@/icons/IceCube';
import { showErrorMessage, showSuccessMessage } from '@/utils/ui';

interface Referral {
  telegramId: string;
  points: number;
}

export default function Friends() {
  const { userTelegramInitData } = useGameStore();
  const [isLoading, setIsLoading] = useState(false);
  const [buttonText, setButtonText] = useState("Invite a friend");
  const [referrals, setReferrals] = useState<Referral[]>([]);
  const [referralCount, setReferralCount] = useState(0);
  const [isLoadingReferrals, setIsLoadingReferrals] = useState(true);

  const formatNumber = (num: number) => {
    if (num >= 1000000000) return `${(num / 1000000000).toFixed(2)}B`;
    if (num >= 1000000) return `${(num / 1000000).toFixed(2)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(2)}K`;
    return num.toString();
  };

  const fetchReferrals = useCallback(async () => {
    setIsLoadingReferrals(true);
    try {
      const response = await fetch(`/api/user/referrals?initData=${encodeURIComponent(userTelegramInitData)}`);
      if (!response.ok) {
        throw new Error('Failed to fetch referrals');
      }
      const data = await response.json();
      setReferrals(data.referrals);
      setReferralCount(data.referralCount);
    } catch (error) {
      console.error('Error fetching referrals:', error);
      showErrorMessage('Failed to fetch referrals. Please try again later.');
    } finally {
      setIsLoadingReferrals(false);
    }
  }, [userTelegramInitData]);

  useEffect(() => {
    fetchReferrals();
  }, [fetchReferrals]);

  const handleInvite = (type: 'regular' | 'premium') => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success(`Invitation ${type === 'premium' ? 'with Telegram Premium ' : ''}sent!`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
      });
    }, 1000);
  };

  const handleInviteButtonClick = useCallback(() => {
    navigator.clipboard.writeText(`https://t.me/your_bot_username/start?startapp=kentId`)
      .then(() => {
        setButtonText("Link copied");
        showSuccessMessage("Invite link copied to clipboard!");

        setTimeout(() => {
          setButtonText("Invite a friend");
        }, 2000);
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
        showErrorMessage("Failed to copy link. Please try again.");
      });
  }, []);

  return (
    <div className="bg-black flex justify-center">
      <ToastContainer />
      <div className="w-full bg-black text-white h-screen font-bold flex flex-col max-w-xl">
        <div className="flex-grow mt-4 bg-[#f3ba2f] rounded-t-[48px] relative top-glow z-0">
          <div className="absolute top-[2px] left-0 right-0 bottom-0 bg-[#1d2025] rounded-t-[46px] px-4 py-6 overflow-y-auto">
            <div className="relative min-h-full pb-20">
              <h1 className="text-2xl text-center mb-4">Invite Friends!</h1>
              <p className="text-center text-gray-400 mb-8">You and your friend will receive bonuses</p>

              <div className="space-y-2">
                <div className="flex justify-between items-center bg-[#272a2f] rounded-lg p-4" onClick={() => handleInvite('regular')}>
                  <div className="flex items-center">
                    <Image src={baseGift} alt="Base gift" width={40} height={40} className="rounded-lg mr-2" />
                    <div className="flex flex-col">
                      <span className="font-medium">Regular Invite</span>
                      <span className="text-sm text-gray-400">Invite friends to join us!</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <IceCubes width={20} height={20} />
                    <span className="text-xl">{formatNumber(500)}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center bg-[#272a2f] rounded-lg p-4" onClick={() => handleInvite('premium')}>
                  <div className="flex items-center">
                    <Image src={bigGift} alt="Premium gift" width={40} height={40} className="rounded-lg mr-2" />
                    <div className="flex flex-col">
                      <span className="font-medium">Premium Invite</span>
                      <span className="text-sm text-gray-400">Invite with Telegram Premium!</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <IceCubes width={20} height={20} />
                    <span className="text-xl">{formatNumber(2000)}</span>
                  </div>
                </div>
              </div>

              <button
                className="mt-8 bg-[#319ee0] rounded-lg py-4 font-medium text-lg text-white w-full"
                onClick={handleInviteButtonClick}
              >
                {buttonText}
              </button>

              <div className="mt-8">
                <h2 className="text-lg mb-4">Your Referrals</h2>
                {isLoadingReferrals ? (
                  <p>Loading...</p>
                ) : referrals.length === 0 ? (
                  <p>No referrals yet. Start inviting friends!</p>
                ) : (
                  <div className="space-y-2">
                    {referrals.map((referral) => (
                      <div key={referral.telegramId} className="flex justify-between items-center bg-[#272a2f] rounded-lg p-4">
                        <div className="flex items-center">
                          <span className="font-medium">{referral.telegramId}</span>
                        </div>
                        <div className="text-right">
                          <IceCube width={20} height={20} />
                          <span className="text-xl">{formatNumber(referral.points)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
